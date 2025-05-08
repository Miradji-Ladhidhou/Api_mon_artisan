// Importation des modules nécessaires : Sequelize pour la gestion de la base de données
// et dotenv pour charger les variables d'environnement depuis un fichier .env
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configuration de la connexion à la base de données en utilisant les variables d'environnement.
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql'
  }
};

// Vérification de la connexion à la base de données.
sequelize.authenticate()
  .then(() => {
    console.log("Connexion à la base de données réussie !");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });

module.exports = sequelize;
