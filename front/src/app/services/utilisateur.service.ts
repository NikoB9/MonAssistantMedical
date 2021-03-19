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
    return this.http.get<Utilisateur>(`http://localhost:3000/api/utilisateur/authentification/${userLogin.login}/${userLogin.password}`);
  }

  public createUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`http://localhost:3000/api/utilisateur/`, user);
  }

  public getUser(id: string | null): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`http://localhost:3000/api/utilisateur/${id}`);
  }

  public updateUser(id: string | null, user: Utilisateur): Observable<boolean> {
    return this.http.put<boolean>(`http://localhost:3000/api/utilisateur/${id}`, user);
  }
}
