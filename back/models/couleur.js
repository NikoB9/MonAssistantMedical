'use strict';
module.exports = (sequelize, DataTypes) => {
  var Couleur = sequelize.define('Couleur', {
    label: DataTypes.STRING
  });

  return Couleur;
};