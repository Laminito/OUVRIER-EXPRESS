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
                libelle: 'maçon professionnel',
            },
            {
                libelle: 'maçon manoeuvre',
            },
            {
                libelle: 'menuisier'
            },
            {
                libelle: 'electricien batiment'
            },
            {
                libelle: 'electricien voiture poids lourds'
            },
            {
                libelle: 'electricien voiture poids legers'
            },
            {
                libelle: 'mecanicien poids lourds'
            },
            {
                libelle: 'mecanicien poids legers'
            },
            {
                libelle: 'plombier'
            },
            {
                libelle: 'chauffeur poids lourds'
            },
            {
                libelle: 'chauffeur poids legers'
            },
            {
                libelle: 'mouleur de brique'
            },
            {
                libelle: 'femme de chamnre'
            },
            {
                libelle: 'cuisinier(e)'
            },
            {
                libelle: 'nounou'
            },
            {
                libelle: 'peintre batiment'
            },
            {
                libelle: 'peintre voiture'
            },
            {
                libelle: 'soudeur metallique'
            },
            {
                libelle: 'soudeur aluminium'
            },
            {
                libelle: 'gardinage'
            },
            {
                libelle: 'vulganisateur'
            }
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Metiers');
    }
};