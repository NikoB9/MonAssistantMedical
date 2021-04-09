import { Injectable } from '@angular/core';
import {Analyse} from '../models/analyse.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http: HttpClient) { }

  public getAnalyseByReleveType(id: number | null): Observable<Analyse[]> {
    return this.http.get<Analyse[]>(`http://localhost:3000/api/analyse/typeReleve/${id}`);
  }
}
