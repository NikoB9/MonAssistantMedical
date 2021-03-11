'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Couleur', {
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
      queryInterface.sequelize.query("INSERT INTO Couleur(id, label) VALUES(1, 'green'),(2, 'orange'), (3, 'red')");
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Couleur');
  }
};