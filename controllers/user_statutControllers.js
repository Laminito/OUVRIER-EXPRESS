//importcd
const models = require("../models");
const { Op } = require("sequelize");
module.exports = {
    getAllUsers_Statuts: (req, res) => {
        models.User_Statut.findAll({
            attributes: [
                'id',
            ],
            where: { etat: true },

            order: [
                ['id', 'ASC']
            ],
            include: [{
                    model: models.Statut,
                    attributes: ['role']
                },
                {
                    model: models.User,
                    attributes: [
                        'id',
                        'prenom',
                        'nom',
                        'telephone',
                        'cni',
                        'username',
                    ]
                }
            ],
        }).then((user_metier) => {
            console.log("user_statut : ", user_metier);
            return res.status(200).json({
                success: true,
                message: "request get All User_Statut successfully",
                results: user_metier
            })
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: "failed get All User_Statut request",
                results: err
            })
        })

    }
}