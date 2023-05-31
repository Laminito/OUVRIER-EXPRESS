//importcd
const models = require("../models");
const { Op } = require("sequelize");


module.exports = {

    getUsers: (req, res) => {
        models.User.findAll({
            attributes: [
                'id',
                'prenom',
                'nom',
                'telephone',
                'cni',
                'username',
                'password'

            ],
            where: { etat: true },
            order: [
                ['id', 'ASC']
            ],

        }).then((users) => {
            console.log("users : ", users);

            return res.status(200).json({
                success: true,
                message: "request get All Users successfully",
                results: users
            })
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: "failed get All Users request",
                results: err
            })
        })

    }
}