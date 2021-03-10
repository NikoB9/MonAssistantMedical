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
    }).then(function () {
      queryInterface.sequelize.query("INSERT INTO analyse(mini, maxi, dangerositeId, typeReleveId, profilId)" +
      // Vérifications IMC -- Adulte"
      "VALUES (0, 18.4, 1, 8, 2)," +
      "(18.5, 24.9, 2, 8, 2)," +
      "(25, 29.9, 3, 8, 2)," +
      "(30, 34.9, 4, 8, 2)," +
      "(35, 39.9, 5, 8, 2)," +
      "(40, 100, 6, 8, 2), " +
      // Vérification Température -- Adulte"
      "(0, 35, 9, 7, 2)," +
      "(35.1, 36, 8, 7, 2)," +
      "(36.1, 37.5, 7, 7, 2)," +
      "(37.6, 39, 8, 7, 2)," +
      "(39.1, 100, 9, 7, 2)," +
      // Vérification Oxygénation -- Adulte"
      "(95, 100, 7, 3, 2)," +
      "(90, 94.9, 8, 3, 2)," +
      "(0, 89.9, 9, 3, 2)," +
      // Vérification rythme cardiaque -- Adulte
      "(0, 40, 9, 4, 2)," +
      "(40.1, 49.9, 8, 4, 2)," +
      "(50, 90, 7, 4, 2)," +
      "(90.1, 110, 8, 4, 2)," +
      "(110.1, 300, 9, 4, 2)," +
      // Vérification Tension artérielle -- Cardiaque
      "(0, 99.9, 9, 1, 1)," +
      "(100, 140, 7, 1, 1)," +
      "(140.1, 159.9, 8, 1, 1)," +
      "(160, 300, 9, 1, 1);");
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Analyse');
  }
};