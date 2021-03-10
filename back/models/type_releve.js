'use strict';
module.exports = (sequelize, DataTypes) => {
  var TypeReleve = sequelize.define('TypeReleve', {
    label: DataTypes.STRING
  }, { tableName: 'TypeReleve' });

  return TypeReleve;
};