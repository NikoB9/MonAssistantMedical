import { Injectable } from '@angular/core';
import {Utilisateur, UtilisateurLogin} from '../models/utilisateur.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ComplexeRelevePaginate} from '../models/releve.model';
import { VariablesGlobales } from './global';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  public authenticate(userLogin: UtilisateurLogin): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${VariablesGlobales.baseURL}utilisateur/authentification/${userLogin.login}/${userLogin.password}`);
  }

  public createUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${VariablesGlobales.baseURL}utilisateur/`, user);
  }

  public getUser(id: string | null): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${VariablesGlobales.baseURL}utilisateur/${id}`);
  }

  public updateUser(id: string | null, user: Utilisateur): Observable<boolean> {
    return this.http.put<boolean>(`${VariablesGlobales.baseURL}utilisateur/${id}`, user);
  }

  public addUserProfil(idUser: number, idProfil: number): Observable<boolean> {
    return this.http.post<boolean>(`${VariablesGlobales.baseURL}utilisateur/${idUser}/profil/${idProfil}`, {});
  }

  public removeUserProfil(idUser: number, idProfil: number): Observable<boolean> {
    return this.http.delete<boolean>(`${VariablesGlobales.baseURL}utilisateur/${idUser}/profil/${idProfil}`);
  }

  public getUserReleves(id: string | null, page: number): Observable<ComplexeRelevePaginate> {
    return this.http.get<ComplexeRelevePaginate>(`${VariablesGlobales.baseURL}utilisateur/${id}/releves?page=${page}`);
  }

  public getUserRelevesFilterType(id: string | null, idType: string, page: number): Observable<ComplexeRelevePaginate> {
    return this.http.get<ComplexeRelevePaginate>(`${VariablesGlobales.baseURL}utilisateur/${id}/releves?type=${idType}?page=${page}`);
  }
}
