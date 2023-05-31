'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('userMetiers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            disponible: {
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
            MetierId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Metiers',
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
        await queryInterface.bulkInsert('userMetiers', [{
                UserId: 2,
                MetierId: 2
            },
            {
                UserId: 3,
                MetierId: 2
            }
        ])

    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('userMetiers');
    }
};