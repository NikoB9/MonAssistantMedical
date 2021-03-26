import {Dangerosite} from './dangerosite.model';

export interface Analyse {
	'id': number;
	'mini': number;
	'maxi': number;
	'DangerositeId': number;
	'ProfilId': number;
	'TypeReleveId': number;
	'Dangerosite': Dangerosite;
}