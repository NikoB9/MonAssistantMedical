import { Injectable } from '@angular/core';
import {Analyse} from '../models/analyse.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { VariablesGlobales } from './global';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http: HttpClient) { }

  public getAnalyseByReleveType(id: number | null): Observable<Analyse[]> {
    return this.http.get<Analyse[]>(`${VariablesGlobales.baseURL}analyse/typeReleve/${id}`);
  }
}
