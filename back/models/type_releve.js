'use strict';
module.exports = (sequelize, DataTypes) => {
  var TypeReleve = sequelize.define('TypeReleve', {
    label: DataTypes.STRING
  }, { tableName: 'TypeReleve' });

  TypeReleve.associate = function(models) {
    models.TypeReleve.hasMany(models.ReleveMedical);
    models.TypeReleve.hasMany(models.Analyse);
  };

  return TypeReleve;
};