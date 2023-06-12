'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const bcrypt = require("bcryptjs")
    const defaultpass = "passer"
    async function hash(password) {
        const passwprdHash = await bcrypt.hash(password, 10);

        return passwprdHash;
    }
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.User_Statut);
            this.hasMany(models.userMetier);

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
            allowNull: false,
            defaultValue: hash(defaultpass)
        },
        avatar: {
            type: DataTypes.BLOB,
            get() {
                return this.getDataValue('avatar').toString('utf8'); // or whatever encoding is right
            },
        },
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};