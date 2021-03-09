'use strict';
module.exports = (sequelize, DataTypes) => {
  var ReleveMedical = sequelize.define('ReleveMedical', {
    prise_de_mesure: DataTypes.DATE,
    valeur: DataTypes.DOUBLE
  });

  ReleveMedical.associate = function(models) {
    models.ReleveMedical.belongsTo(models.Utilisateur);
    models.ReleveMedical.belongsTo(models.TypeReleve);
  };

  return ReleveMedical;
};