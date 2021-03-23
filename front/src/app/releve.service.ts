import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Releve } from './models/releve.models';

@Injectable({
  providedIn: 'root'
})
export class ReleveService {
  
  constructor(private http : HttpClient) {
  
  }

  public getReleves(): Observable<Releve[]> {
    return this.http.get<Releve[]>("http://localhost:3000/api/releve_medical");
  }
}
