import { Injectable } from '@angular/core';
import {Utilisateur, UtilisateurLogin} from '../models/utilisateur.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Releve, ComplexeReleve} from '../models/releve.model';

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

  public addUserProfil(idUser: number, idProfil: number): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:3000/api/utilisateur/${idUser}/profil/${idProfil}`, {});
  }

  public removeUserProfil(idUser: number, idProfil: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/api/utilisateur/${idUser}/profil/${idProfil}`);
  }

  public getUserReleves(id: string | null): Observable<ComplexeReleve[]> {
    return this.http.get<ComplexeReleve[]>(`http://localhost:3000/api/utilisateur/${id}/releves`);
  }

  public getUserRelevesFilterType(id: string | null, idType: string): Observable<ComplexeReleve[]> {
    return this.http.get<ComplexeReleve[]>(`http://localhost:3000/api/utilisateur/${id}/releves?type=${idType}`);
  }
}
