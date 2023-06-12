'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User_Statuts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            etat: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            StatutId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Statuts',
                    key: 'id'
                }
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
        await queryInterface.bulkInsert('User_Statuts', [{
                UserId: 1,
                StatutId: 1
            },
            {
                UserId: 2,
                StatutId: 2
            },
            {
                UserId: 3,
                StatutId: 2
            },
            {
                UserId: 4,
                StatutId: 2
            },
            {
                UserId: 5,
                StatutId: 2
            },
            {
                UserId: 6,
                StatutId: 2
            },
            {
                UserId: 7,
                StatutId: 2
            },
            {
                UserId: 8,
                StatutId: 2
            },
            {
                UserId: 9,
                StatutId: 2
            }
        ])

    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('User_Statuts');
    }
};