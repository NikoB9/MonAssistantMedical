import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Releve } from '../models/releve.model';

@Injectable({
  providedIn: 'root'
})
export class ReleveService {
  
  constructor(private http : HttpClient) {
  
  }

  public getReleves(): Observable<Releve[]> {
    return this.http.get<Releve[]>("http://localhost:3000/api/releve_medical");
  }

  public deleteReleves(id:number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/api/releve_medical/${id}`);
  }

  public createReleve(releve: Releve): Observable<Releve> {
  	return this.http.post<Releve>("http://localhost:3000/api/releve_medical", releve);
  }
}
