import { Injectable } from '@angular/core';
import {Analyse} from '../models/analyse.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http: HttpClient) { }

  public getAnalyse(id: string | null): Observable<Analyse> {
    return this.http.get<Analyse>(`http://localhost:3000/api/analyse/${id}`);
  }
}
