import {TypeReleve} from './typeReleve.model'

export type Releve = {
	id:number,
	prise_de_mesure:string, 
	valeur:number, 
	UtilisateurId:number,
	TypeReleveId:number,
	TypeReleve:TypeReleve
};

