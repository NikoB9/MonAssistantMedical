'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profil = sequelize.define('Profil', {
    label: DataTypes.STRING
  }, { tableName: 'Profil' });

  Profil.associate = function(models) {
    models.Profil.belongsToMany(models.Utilisateur, { through: 'utilisateur_profils' });
    models.Profil.hasMany(models.Analyse);
  };

  return Profil;
};