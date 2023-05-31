'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Statut extends Model {
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
    Statut.init({
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Statut',
    });
    return Statut;
};