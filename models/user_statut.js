'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_Statut extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: 'UserId' });
            this.belongsTo(models.Statut, { foreignKey: 'StatutId' });
        }
    }
    User_Statut.init({
        etat: DataTypes.BOOLEAN,
        UserId: DataTypes.INTEGER,
        StatutId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User_Statut',
    });
    return User_Statut;
};