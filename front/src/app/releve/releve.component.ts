import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { ReleveService } from '../services/releve.service';
import {Observable} from "rxjs";
import { Releve } from '../models/releve.model';

@Component({
  selector: 'app-releve',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.css']
})

export class ReleveComponent implements OnInit {
  releves?: Releve[];
  id: string | null;

  constructor(private utilisateurService: UtilisateurService, private releveService: ReleveService) {
  	this.id = sessionStorage?.getItem('id');
  }

  ngOnInit() {
    this.getReleves();
  }

  getReleves(): void{
    this.utilisateurService.getUserReleves(this.id).subscribe((releves)=>{
      this.releves = releves;
      console.log(this.releves);
    });
  }

  dateFormat(date: string):string {
    const dateSplit = date.split('-');

    return "" + dateSplit[2].split('T')[0] + "/" + dateSplit[1] + "/" + dateSplit[0];
  }

  deleteReleve(id: number): void{
    this.releveService.deleteReleves(id).subscribe((supression) =>{
      if (supression) {
        this.getReleves();
      } // TODO else avec msg d'erreur
    })
  }

}