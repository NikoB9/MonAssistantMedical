'use strict';
module.exports = (sequelize, DataTypes) => {
  var Couleur = sequelize.define('Couleur', {
    label: DataTypes.STRING
  }, { tableName: 'Couleur' });

  Couleur.associate = function(models) {
    models.Couleur.hasMany(models.Dangerosite);
  };

  return Couleur;
};