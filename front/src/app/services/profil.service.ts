import { Injectable } from '@angular/core';
import {Profil} from '../models/profil.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  public getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(`http://localhost:3000/api/profil/`);
  }
}
