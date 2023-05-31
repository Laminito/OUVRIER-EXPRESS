//importcd
const models = require("../models");
const { Op } = require("sequelize");
module.exports = {

    getAllUsers_Metiers: (req, res) => {
        models.userMetier.findAll({
            attributes: [
                'id',
            ],
            where: { disponible: true },
            order: [
                ['id', 'ASC']
            ],
            include: [{
                    model: models.User,
                    attributes: [
                        'id',
                        'prenom',
                        'nom',
                        'telephone',
                        'cni',
                        'username',
                    ]
                },
                {
                    model: models.Metiers,
                    attributes: ['id', 'libelle']
                },
            ],
        }).then((user_metier) => {
            console.log("user_metier : ", user_metier);

            return res.status(200).json({
                success: true,
                message: "request get All User_Metier successfully",
                results: user_metier
            })
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: "failed get All User_Metier request",
                results: err
            })
        })

    }
}