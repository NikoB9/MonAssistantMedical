'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("INSERT INTO Utilisateur(nom, prenom, login, mot_de_passe) " +
    "VALUES('Lim', 'Tony', 'toli', 'toli'), ('Rivoallanou-Drevet', 'Salomé', 'sari', 'sari')" + 
    ", ('Bourneuf', 'Nicolas', 'nibo', 'nico')");
    queryInterface.sequelize.query("INSERT INTO utilisateur_profils(UtilisateurId, ProfilId) VALUES" +
    "(1, 1), (1, 2), (2, 1), (3, 1), (1, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
    "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " + 
    "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
    "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " + 
    "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
    "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
    "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " + 
    "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
    "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " + 
    "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
    "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
    "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " + 
    "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
    "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " + 
    "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
    "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
    "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
    "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
    "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");

    //redondance
    console.log("redondance 0");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");

    console.log("redondance 1");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");

    console.log("redondance 2");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
    // Relevés Tony
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 1, 1), ('2020-04-17 13:32:43', 120, 1, 1), ('2020-05-17 13:32:43', 110, 1, 1), " +
        "('2020-06-17 13:32:43', 105, 1, 1), ('2020-07-17 13:32:43', 90, 1, 1), ('2020-08-17 13:32:43', 85, 1, 1), " +
        "('2020-09-17 13:32:43', 90, 1, 1), ('2020-10-17 13:32:43', 100, 1, 1), ('2020-11-17 13:32:43', 115, 1, 1), " +
        "('2020-12-17 13:32:43', 130, 1, 1), ('2021-01-17 13:32:43', 145, 1, 1), ('2021-02-17 13:32:43', 155, 1, 1), " +
        "('2021-03-17 13:32:43', 165, 1, 1)");
    // Relevés Salomé
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 2, 1), ('2020-04-17 13:32:43', 120, 2, 1), ('2020-05-17 13:32:43', 110, 2, 1), " +
        "('2020-06-17 13:32:43', 105, 2, 1), ('2020-07-17 13:32:43', 90, 2, 1), ('2020-08-17 13:32:43', 85, 2, 1), " +
        "('2020-09-17 13:32:43', 90, 2, 1), ('2020-10-17 13:32:43', 100, 2, 1), ('2020-11-17 13:32:43', 115, 2, 1), " +
        "('2020-12-17 13:32:43', 130, 2, 1), ('2021-01-17 13:32:43', 145, 2, 1), ('2021-02-17 13:32:43', 155, 2, 1), " +
        "('2021-03-17 13:32:43', 165, 2, 1)");
    // Relevés Nicolas
    queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2020-03-17 13:32:43', 125, 3, 1), ('2020-04-17 13:32:43', 120, 3, 1), ('2020-05-17 13:32:43', 110, 3, 1), " +
        "('2020-06-17 13:32:43', 105, 3, 1), ('2020-07-17 13:32:43', 90, 3, 1), ('2020-08-17 13:32:43', 85, 3, 1), " +
        "('2020-09-17 13:32:43', 90, 3, 1), ('2020-10-17 13:32:43', 100, 3, 1), ('2020-11-17 13:32:43', 115, 3, 1), " +
        "('2020-12-17 13:32:43', 130, 3, 1), ('2021-01-17 13:32:43', 145, 3, 1), ('2021-02-17 13:32:43', 155, 3, 1), " +
        "('2021-03-17 13:32:43', 165, 3, 1)");
    // Relevés oxygénation
    return queryInterface.sequelize.query("INSERT INTO ReleveMedical(prise_de_mesure, valeur, UtilisateurId, TypeReleveId) VALUES" +
        "('2021-01-17 13:32:43', 93, 1, 2), ('2020-02-17 13:32:43', 95, 1, 2), ('2020-03-17 13:32:43', 96, 1, 2), " +
        "('2021-01-17 13:32:43', 93, 2, 2), ('2020-02-17 13:32:43', 95, 2, 2), ('2020-03-17 13:32:43', 96, 2, 2), " +
        "('2021-01-17 13:32:43', 93, 3, 2), ('2020-02-17 13:32:43', 95, 3, 2), ('2020-03-17 13:32:43', 96, 3, 2)");
  }
};
