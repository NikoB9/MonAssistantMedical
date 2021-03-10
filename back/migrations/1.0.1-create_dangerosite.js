'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dangerosite', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      },
      CouleurId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Couleur',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    }).then(function () {
      queryInterface.sequelize.query("INSERT INTO dangerosite(id, message, couleurId) VALUES(1, 'Insuffisance pondérale', 3), " +
      "(2, 'Corpulence normale', 1), (3, 'Surpoids', 2), (4, 'Obésité modérée', 2), " +
      "(5, 'Obésité sévère', 3), (6, 'Obésité morbide', 3), (7, 'Etat de santé stable.', 1), " +
      "(8, 'A surveiller. Consulter votre médecin.', 2), (9, 'Danger. Appelez les urgences.', 3), " +
      "(10, 'Hypoglycémie sévère', 3), (11, 'Hypoglycémie', 2), " +
      "(12, 'Glycémie normale', 1), (13, 'Hyperglycémie modérée', 2), " +
      "(14, 'Diabète', 3)");
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dangerosite');
  }
};