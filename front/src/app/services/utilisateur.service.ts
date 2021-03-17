import { Injectable } from '@angular/core';
import {Utilisateur, UtilisateurLogin} from '../models/utilisateur.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  public authenticate(userLogin: UtilisateurLogin): Observable<Utilisateur> {
    return this.http.post<Utilisateur>('http://localhost:3000/utilisateur/authentification', userLogin);
  }
}
