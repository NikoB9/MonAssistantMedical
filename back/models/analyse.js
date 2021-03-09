'use strict';
module.exports = (sequelize, DataTypes) => {
  var Analyse = sequelize.define('Analyse', {
    mini: DataTypes.DOUBLE,
    maxi: DataTypes.DOUBLE
  });

  Analyse.associate = function(models) {
    models.Analyse.belongsTo(models.Dangerosite);
    models.Analyse.belongsTo(models.Profil);
    models.Analyse.belongsTo(models.TypeReleve);
  };

  return Analyse;
};