import {TypeReleve} from './typeReleve.model'
import {Analyse} from './analyse.model'

export type Releve = {
	id:number,
	prise_de_mesure:string, 
	valeur:number, 
	UtilisateurId:number,
	TypeReleveId:number,
	TypeReleve:TypeReleve
};

export type ComplexeReleve = {
	releve: Releve,
	analyse: Analyse
};