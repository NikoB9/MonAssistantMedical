'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Analyse', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mini: {
        type: Sequelize.DOUBLE
      },
      maxi: {
        type: Sequelize.DOUBLE
      },
      DangerositeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dangerosite',
          key: 'id'
        }
      },
      ProfilId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Profil',
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
    return queryInterface.dropTable('Analyse');
  }
};