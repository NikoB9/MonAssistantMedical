import {Profil} from "./profil.model";

export interface Utilisateur{
  'id': number;
  'nom': string;
  'prenom': string;
  'login': string;
  'mot_de_passe': string;
  'naissance': string;
  'Profils': Profil[];
}

export interface UtilisateurLogin{
  'login': string;
  'password': string;
}
