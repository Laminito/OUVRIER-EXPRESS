'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class userMetier extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: 'UserId' });
            this.belongsTo(models.Metiers, { foreignKey: 'MetierId' });
        }
    }
    userMetier.init({
        etdisponible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        UserId: DataTypes.INTEGER,
        MetierId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'userMetier',
    });
    return userMetier;
};