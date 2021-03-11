'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dangerosite = sequelize.define('Dangerosite', {
    message: DataTypes.STRING
  }, { tableName: 'Dangerosite' });

  Dangerosite.associate = function(models) {
    models.Dangerosite.belongsTo(models.Couleur);
    models.Dangerosite.hasMany(models.Analyse);
  };

  return Dangerosite;
};