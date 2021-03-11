'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TypeReleve', {
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
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    }).then(function () {
      queryInterface.sequelize.query("INSERT INTO TypeReleve(id, label) VALUES(1, 'Tension systolique'), " +
      "(2, 'Masse corporelle'), (3, 'Oxygénation'), (4, 'Rythme cardiaque'), " +
      "(5, 'Glycémie'), (6, 'Taille'), (7, 'Température'), (8, 'IMC');");
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TypeReleve');
  }
};