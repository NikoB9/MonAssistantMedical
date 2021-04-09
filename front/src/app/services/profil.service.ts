import { Injectable } from '@angular/core';
import {Profil} from '../models/profil.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { VariablesGlobales } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  public getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(`${VariablesGlobales.baseURL}profil/`);
  }
}
