'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.User_Statut);

        }
    }
    User.init({
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        cni: {
            type: DataTypes.STRING,
            allowNull: false
        },
        etat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // metiers: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: false,
        // }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};