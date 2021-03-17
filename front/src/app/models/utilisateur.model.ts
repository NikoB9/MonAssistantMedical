export interface Utilisateur{
  'id': number;
  'nom': string;
  'prenom': string;
  'login': string;
  'mot_de_passe': string;
  'naissance': string;
}

export interface UtilisateurLogin{
  'login': string;
  'password': string;
}
