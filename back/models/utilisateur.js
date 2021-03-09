'use strict';
module.exports = (sequelize, DataTypes) => {
  var Utilisateur = sequelize.define('Utilisateur', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    login: DataTypes.STRING,
    mot_de_passe: DataTypes.STRING,
    naissance: DataTypes.DATE
  });

  Utilisateur.associate = function(models) {
    models.Utilisateur.belongsToMany(models.Profil, { through: 'utilisateur_profils' })
  };

  return Utilisateur;
};