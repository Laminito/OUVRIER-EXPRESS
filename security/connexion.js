//importing modules

const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");
const getUsers = require('../controllers/userControllers')
const ms = require('ms');
const models = require("../models");



// Assigning users to the variable User
const User = db.users;


//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async(req, res) => {
    // console.log('pasjfgveyrbcehjberhvfhvghev', passwordgenerator.password);
    // console.log(" expiredans :", ms(10 * 60000, { long: true }));
    try {
        const {
            prenom,
            nom,
            email,
            avatar,
            password
        } = req.body;
        const data = {
            prenom,
            nom,
            email,
            avatar,
            password: await bcrypt.hash(password, 10),
        };

        const user = await db.User.create(data);

        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        //set cookie with the token generated
        if (user) {
            let token = jwt.sign({ email: user.email }, process.env.SECRETKEY, {
                expiresIn: process.env.jwtExpirySeconds,
                // expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: process.env.jwtExpirySeconds, httpOnly: true });
            // res.cookie("jwt", token);
            console.log("user", JSON.stringify(user, null, 2));
            const expireDans = `Cet mot de passe expire dans : ${ms(10 * 60000, { long: true })} min`

            send_mail.sendEmail(req.body.email, '15mn', message);

            console.log(token);
            //send users details
            return res.status(201).json(user);
        } else {
            return res.status(409).send("Details are not correct");
        }
    } catch (error) {
        console.log(error);
    }
};


//login authentication


const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        //find a user by their email
        const user = await db.User.findOne({
            where: {
                email: req.body.email
            },
        });

        //if user email is found, compare password with bcrypt
        if (user) {

            const isSame = await bcrypt.compare(password, user.password);

            //if password is the same
            //generate token with the user's id and the secretKey in the env file
            if (isSame) {
                let currentUser
                models.User.findAll({
                    attributes: ['id', 'email']
                }).then((users) => {


                    let userId
                    users.forEach(users => {
                        if (users.email === user.email) {
                            userId = users.dataValues.id;
                            console.log("userId", userId, "\n", "email", user.email);
                        }
                        return userId
                    })
                    currentUser = userId
                    console.log("userNow1", currentUser);
                    let token = jwt.sign({ id: currentUser }, process.env.SECRETKEY, {
                        algorithm: "HS256",
                        expiresIn: process.env.jwtExpirySeconds,
                    });
                    //if password matches wit the one in the database
                    //go ahead and generate a cookie for the user
                    res.cookie("jwt", token, { maxAge: process.env.jwtExpirySeconds * 1000, httpOnly: true });
                    // console.log("user", JSON.stringify(user, null, 2));
                    return res.json({
                        success: 1,
                        message: "login successfully",
                        token: token,
                        userID: currentUser
                    });
                })


            } else {
                return res.status(401).json("Connexion refusée");
            }
        } else {
            return res.status(401).json("Authentication failed");
        }
    } catch (error) {
        console.log(error);
    }
};


const updatePassword = async(req, res) => {
    const { token, password } = req.body
    if (token) {
        jwt.verify(token, process.env.RESETSECRETKEY, function(error, decodedData) {
            if (error) {
                return res.status(400).json({ error: 'Incorrect Token or it is expired' })
            }

            models.User.findOne({ resetLink: token }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({ error: 'User with this token does not exist' })
                }
                user.password = password
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({ error: 'Reset Password Error' })
                    } else {
                        return res.status(200).json({ message: 'Your Password has been changed' })
                    }
                })
            })
        })
    } else {
        return res.status(401).json({ error: 'Authentication Error' })

    }

};

module.exports = {
    signup,
    login,
    updatePassword
};