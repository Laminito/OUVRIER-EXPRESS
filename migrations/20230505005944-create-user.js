'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            prenom: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nom: {
                type: Sequelize.STRING,
                allowNull: false
            },
            telephone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cni: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            etat: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            // metiers: {
            //     type: Sequelize.ARRAY(Sequelize.STRING),
            //     allowNull: false,
            // },
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
        await queryInterface.bulkInsert('Users', [{
                prenom: "Adama",
                nom: "Cissé",
                telephone: "77531285",
                cni: "1945201301869",
                username: "luthio",
                password: "passer123",
            },
            {
                prenom: "Mohamed",
                nom: "Ba",
                telephone: "783703310",
                cni: "1945201301879",
                username: "Lamino",
                password: "passer123",
            },
            {
                prenom: "Ablaye",
                nom: "Mangane",
                telephone: "773703310",
                cni: "1945199498869",
                username: "abdalah",
                password: "passer123",
            },
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};