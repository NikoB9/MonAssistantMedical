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

INSERT INTO profil(id, label) VALUES(1, "Cardiaque"), 
(2, "Adulte");

CREATE TABLE type_releve(
   id INT AUTO_INCREMENT,
   label VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);

INSERT INTO type_releve(id, label) VALUES(1, "Tension systolique"), 
(2, "Masse corporelle"), (3, "Oxygénation"), (4, "Rythme cardiaque"), 
(5, "Glycémie"), (6, "Taille"), (7, "Température"), (8, "IMC");

CREATE TABLE couleur(
   id INT AUTO_INCREMENT,
   label VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);

INSERT INTO couleur(id, label) VALUES(1, "green"), 
(2, "orange"), (3, "red");

CREATE TABLE dangerosite(
   id INT AUTO_INCREMENT,
   message TEXT NOT NULL,
   couleur INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(couleur) REFERENCES couleur(id)
);

INSERT INTO dangerosite(id, message, couleur) VALUES(1, "Insuffisance pondérale", 3), 
(2, "Corpulence normale", 1), (3, "Surpoids", 2), (4, "Obésité modérée", 2), 
(5, "Obésité sévère", 3), (6, "Obésité morbide", 3), (7, "Etat de santé stable.", 1), 
(8, "A surveiller. Consulter votre médecin.", 2), (9, "Danger. Appelez les urgences.", 3), 
(10, "Hypoglycémie sévère", 3), (11, "Hypoglycémie", 2), 
(12, "Glycémie normale", 1), (13, "Hyperglycémie modérée", 2), 
(14, "Diabète", 3);

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

INSERT INTO analyse(mini, maxi, dangerosite, type, profil)
-- Vérifications IMC -- Adulte
VALUES (0, 18.4, 1, 8, 2),
(18.5, 24.9, 2, 8, 2),
(25, 29.9, 3, 8, 2),
(30, 34.9, 4, 8, 2),
(35, 39.9, 5, 8, 2),
(40, 100, 6, 8, 2), 
-- Vérification Température -- Adulte
(0, 35, 9, 7, 2),
(35.1, 36, 8, 7, 2),
(36.1, 37.5, 7, 7, 2),
(37.6, 39, 8, 7, 2),
(39.1, 100, 9, 7, 2),
-- Vérification Oxygénation -- Adulte
(95, 100, 7, 3, 2),
(90, 94.9, 8, 3, 2),
(0, 89.9, 9, 3, 2),
-- Vérification rythme cardiaque -- Adulte
(0, 40, 9, 4, 2),
(40.1, 49.9, 8, 4, 2),
(50, 90, 7, 4, 2),
(90.1, 110, 8, 4, 2),
(110.1, 300, 9, 4, 2),


-- Vérification Tension artérielle -- Cardiaque
(0, 99.9, 9, 1, 1),
(100, 140, 7, 1, 1),
(140.1, 159.9, 8, 1, 1),
(160, 300, 9, 1, 1);


CREATE TABLE utilisateur_profils(
   utilisateur INT AUTO_INCREMENT,
   profil INT NOT NULL,
   PRIMARY KEY(utilisateur, profil),
   FOREIGN KEY(utilisateur) REFERENCES utilisateur(id),
   FOREIGN KEY(profil) REFERENCES profil(id)
);
