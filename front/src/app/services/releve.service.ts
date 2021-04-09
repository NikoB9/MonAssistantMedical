import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Releve, ComplexeReleve} from '../models/releve.model';
import { VariablesGlobales } from './global';

@Injectable({
  providedIn: 'root'
})
export class ReleveService {

  constructor(private http: HttpClient) {

  }

  public getReleves(): Observable<ComplexeReleve[]> {
    return this.http.get<ComplexeReleve[]>(`${VariablesGlobales.baseURL}releve_medical`);
  }

  public deleteReleves(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${VariablesGlobales.baseURL}releve_medical/${id}`);
  }

  public createReleve(releve: Releve): Observable<Releve> {
    return this.http.post<Releve>(`${VariablesGlobales.baseURL}releve_medical`, releve);
  }

  public getReleve(id: number): Observable<Releve> {
    return this.http.get<Releve>(`${VariablesGlobales.baseURL}releve_medical/${id}`);
  }

  public editReleve(releve: Releve, id: number): Observable<Releve> {
    return this.http.put<Releve>(`${VariablesGlobales.baseURL}releve_medical/${id}`, releve);
  }
}
