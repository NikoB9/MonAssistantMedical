'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profil', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    }).then(function () {
      queryInterface.sequelize.query("INSERT INTO Profil(id, label) VALUES(1, 'Cardiaque'), (2, 'Adulte');");
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profil');
  }
};