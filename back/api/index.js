const express = require('express');
const analyse = require('./routes/analyse');
const couleur = require('./routes/couleur');
const dangerosite = require('./routes/dangerosite');
const profil = require('./routes/profil');
const releve_medical = require('./routes/releve_medical');
const type_releve = require('./routes/type_releve');
const utilisateur = require('./routes/utilisateur');
const router = express.Router();

module.exports = () => {
    router.use('/analyse',analyse());
    router.use('/couleur',couleur());
    router.use('/dangerosite',dangerosite());
    router.use('/profil',profil());
    router.use('/releve_medical',releve_medical());
    router.use('/type_releve',type_releve());
    router.use('/utilisateur',utilisateur());

    return router;
};