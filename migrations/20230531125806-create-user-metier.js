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
                MetierId: 1
            },
            {
                UserId: 3,
                MetierId: 2
            },
            {
                UserId: 4,
                MetierId: 3
            },
            {
                UserId: 5,
                MetierId: 4
            },
            {
                UserId: 6,
                MetierId: 5
            },
            {
                UserId: 7,
                MetierId: 6
            },
            {
                UserId: 8,
                MetierId: 7
            },
            {
                UserId: 9,
                MetierId: 8
            },
            {
                UserId: 9,
                MetierId: 9
            },
            {
                UserId: 2,
                MetierId: 10
            },
            {
                UserId: 3,
                MetierId: 11
            },
            {
                UserId: 4,
                MetierId: 12
            },
            {
                UserId: 5,
                MetierId: 13
            },
            {
                UserId: 6,
                MetierId: 14
            },
            {
                UserId: 7,
                MetierId: 15
            },
            {
                UserId: 8,
                MetierId: 16
            },
            {
                UserId: 9,
                MetierId: 17
            },
            {
                UserId: 2,
                MetierId: 18
            },
            {
                UserId: 3,
                MetierId: 19
            },
            {
                UserId: 4,
                MetierId: 20
            },
            {
                UserId: 5,
                MetierId: 21
            }
        ])

    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('userMetiers');
    }
};