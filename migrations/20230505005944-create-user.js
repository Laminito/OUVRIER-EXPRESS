'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs")
const defaultpass = "passer"
async function hash(password) {
    const passwprdHash = await bcrypt.hash(password, 10);

    return passwprdHash;
}
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
                allowNull: false,
                defaultValue: await hash(defaultpass)
            },
            avatar: {
                type: Sequelize.BLOB,
                get() {
                    return this.getDataValue('avatar').toString('utf8'); // or whatever encoding is right
                },
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
                prenom: "Adama",
                nom: "Cissé",
                telephone: "77531285",
                cni: "1945201301869",
                username: "luthio",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Mohamed",
                nom: "Ba",
                telephone: "783703310",
                cni: "1945201301879",
                username: "Lamino",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Ablaye",
                nom: "Mangane",
                telephone: "773703310",
                cni: "1945199498869",
                username: "abdalah",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Mbaye",
                nom: "Camara",
                telephone: "703703310",
                cni: "1945079498869",
                username: "mbaye",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Seydou",
                nom: "Mane",
                telephone: "770003310",
                cni: "1945195648869",
                username: "seydou",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Abdoulaye",
                nom: "Sall",
                telephone: "760003310",
                cni: "9845195648869",
                username: "babagale",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Cheikh",
                nom: "Sow",
                telephone: "770003010",
                cni: "1945195648909",
                username: "cheikh",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Mamadou",
                nom: "Camara",
                telephone: "750003310",
                cni: "1345195648869",
                username: "mamadou",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            },
            {
                prenom: "Makhou",
                nom: "Fall",
                telephone: "759073310",
                cni: "1940195648869",
                username: "makhou",
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN'
            }
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};