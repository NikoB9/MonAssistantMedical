import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Releve, ComplexeReleve} from '../models/releve.model';

@Injectable({
  providedIn: 'root'
})
export class ReleveService {
  
  constructor(private http : HttpClient) {
  
  }

  public getReleves(): Observable<ComplexeReleve[]> {
    return this.http.get<ComplexeReleve[]>("http://localhost:3000/api/releve_medical");
  }

  public deleteReleves(id:number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/api/releve_medical/${id}`);
  }

  public createReleve(releve: Releve): Observable<Releve> {
  	return this.http.post<Releve>("http://localhost:3000/api/releve_medical", releve);
  }

  public getReleve(id: number): Observable<Releve> {
    return this.http.get<Releve>(`http://localhost:3000/api/releve_medical/${id}`);
  }

  public editReleve(releve: Releve, id: number): Observable<Releve> {
    return this.http.put<Releve>(`http://localhost:3000/api/releve_medical/${id}`, releve);
  }
}
