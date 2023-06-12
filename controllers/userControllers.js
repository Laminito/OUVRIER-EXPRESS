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
                'username'
            ],
            where: { etat: true },
            order: [
                ['id', 'ASC']
            ]

        }).then((users) => {
            console.log("users : ", users);
            if (singleUser) {
                let buff = new Buffer(singleUser.avatar);
                singleUser.avatar = buff.toString('base64');
                return res.status(200).json({
                    success: true,
                    message: "request get All Users successfully",
                    results: users
                })
            } else {
                return res.status(500).json({
                    success: false,
                    message: "failed get All Users request",
                    results: err
                })
            }
        }).catch((err) => {
            return res.status(404).json({
                success: false,
                message: "page not found",
                results: err
            })
        })

    },
    getUserById: (req, res) => {
        const id = parseInt(req.params.id);
        models.User.findOne({
            attributes: [
                'id',
                'prenom',
                'nom',
                'telephone',
                'cni',
                'username'
            ],
            where: { id: id },
        }).then((singleUser) => {
            if (singleUser) {
                let buff = new Buffer(singleUser.avatar);
                singleUser.avatar = buff.toString('base64');
                return res.status(200).json({
                    success: true,
                    message: "request get UserById successfully",
                    results: singleUser
                })
            } else {
                return res.status(500).json({
                    success: false,
                    message: "failed get UserById request",
                    results: err
                })
            }
        }).catch((err) => {
            return res.status(404).json({
                success: false,
                message: "page not found",
                results: err
            })
        })
    },
}