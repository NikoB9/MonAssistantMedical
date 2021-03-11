'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ReleveMedical', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prise_de_mesure: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      valeur: {
        type: Sequelize.DOUBLE
      },
      UtilisateurId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Utilisateur',
          key: 'id'
        }
      },
      TypeReleveId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TypeReleve',
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ReleveMedical');
  }
};