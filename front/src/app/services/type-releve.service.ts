import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeReleve } from '../models/typeReleve.model';
import { VariablesGlobales } from './global';

@Injectable({
  providedIn: 'root'
})
export class TypeReleveService {

  constructor(private http: HttpClient) {

  }

  public getTypeReleves(): Observable<TypeReleve[]> {
    return this.http.get<TypeReleve[]>(`${VariablesGlobales.baseURL}type_releve`);
  }

}
