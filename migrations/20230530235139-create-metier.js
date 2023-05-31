'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Metiers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            libelle: {
                type: Sequelize.STRING
            },
            disponible: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
        await queryInterface.bulkInsert('Metiers', [{
                libelle: 'macon'
            },
            {
                libelle: 'menuisier'
            },
            {
                libelle: 'soudeur'
            },
            {
                libelle: 'electricien'
            },
            {
                libelle: 'mecanicien'
            },
            {
                libelle: 'plombier'
            }

        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Metiers');
    }
};