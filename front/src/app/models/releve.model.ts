import {TypeReleve} from './typeReleve.model';
import {Analyse} from './analyse.model';

export interface Releve {
  'id': number;
  'prise_de_mesure': string;
  'valeur': number;
  'UtilisateurId': number;
  'TypeReleveId': number;
  'TypeReleve': TypeReleve;
}

export interface ComplexeReleve {
  'releve': Releve;
  'analyse': Analyse;
}

export interface ComplexeRelevePaginate {
  'complexesReleves': ComplexeReleve[];
  'nbPages': number;
}
