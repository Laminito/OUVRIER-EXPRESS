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
            /*  roles: {
                 type: Sequelize.STRING,
                 allowNull: false,
                 get() {
                     return this.getDataValue('roles').split(';')
                 },
                 set(val) {
                     this.setDataValue('roles', val.join(';'));
                 },
             }, */
            roles: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
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
        await queryInterface.bulkInsert('Users', [{
                prenom: "Mohamed",
                nom: "Ba",
                telephone: "783703310",
                cni: "1945201301869",
                username: "Lamino",
                password: "passer123",
                roles: ["ROLE_ADMIN"]
            },
            {
                prenom: "Ablaye",
                nom: "Mangane",
                telephone: "773703310",
                cni: "1945199401869",
                username: "abdalah",
                password: "passer123",
                roles: ["ROLE_CLIENT"]
            },
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};