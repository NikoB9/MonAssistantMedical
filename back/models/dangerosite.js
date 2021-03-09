'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dangerosite = sequelize.define('Dangerosite', {
    message: DataTypes.STRING
  });

  Dangerosite.associate = function(models) {
    models.Dangerosite.belongsTo(models.Couleur)
  };

  return Dangerosite;
};