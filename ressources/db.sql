DROP DATABASE monassistantmedical;
CREATE DATABASE monassistantmedical;
USE monassistantmedical;

CREATE TABLE utilisateur(
   id INT AUTO_INCREMENT,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   login VARCHAR(50) NOT NULL,
   mot_de_passe TEXT NOT NULL,
   naissance DATE NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE profil(
   id INT AUTO_INCREMENT,
   label VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);

INSERT INTO profil(label) VALUES("Cardiaque"), ("Diabétique"), ("Sans antécédent");

CREATE TABLE type_releve(
   id INT AUTO_INCREMENT,
   label VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);

INSERT INTO type_releve(label) VALUES("Tension artérielle"), ("Masse corporelle"), ("Oxygénation"), ("Rythme cardiaque"), ("Glycémie"), ("Taille"), ("Température"), ("IMC");

CREATE TABLE dangerosite(
   id INT AUTO_INCREMENT,
   message TEXT NOT NULL,
   couleur VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE releve_medicale(
   id INT AUTO_INCREMENT,
   prise_de_mesure DATETIME DEFAULT current_timestamp(),
   valeur DOUBLE NOT NULL,
   utilisateur INT NOT NULL,
   type INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(utilisateur) REFERENCES utilisateur(id),
   FOREIGN KEY(type) REFERENCES type_releve(id)
);

CREATE TABLE analyse(
   id INT AUTO_INCREMENT,
   mini DOUBLE NOT NULL,
   maxi DOUBLE NOT NULL,
   dangerosite INT NOT NULL,
   type INT NOT NULL,
   profil INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(dangerosite) REFERENCES dangerosite(id),
   FOREIGN KEY(type) REFERENCES type_releve(id),
   FOREIGN KEY(profil) REFERENCES profil(id)
);

CREATE TABLE utilisateur_profils(
   utilisateur INT AUTO_INCREMENT,
   profil INT NOT NULL,
   PRIMARY KEY(utilisateur, profil),
   FOREIGN KEY(utilisateur) REFERENCES utilisateur(id),
   FOREIGN KEY(profil) REFERENCES profil(id)
);
