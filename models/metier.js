'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Metier extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.userMetier);
        }
    }
    Metier.init({
        libelle: DataTypes.STRING,
        disponible: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Metiers',
    });
    return Metier;
};