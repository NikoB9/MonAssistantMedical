import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';
import {TypeReleveService} from '../services/type-releve.service';
import {TypeReleve} from '../models/typeReleve.model';

@Component({
  selector: 'app-analyse-page',
  templateUrl: './analyse-page.component.html',
  styleUrls: ['./analyse-page.component.css']
})
export class AnalysePageComponent implements OnInit {

  typeReleves: TypeReleve[];
  navElems: Menu;
  connected: boolean;
  errorMessage: string;

  constructor(private typeReleveService: TypeReleveService) {
    this.typeReleves = [];
    this.navElems = {accueil: false, releves: false, analyses: true, profil: false};
    this.connected = sessionStorage?.getItem('id') !== null;
    this.errorMessage = 'Vous êtes déconnecté. Veuillez vous connecter afin d\'accéder à cette page';
  }

  ngOnInit(): void {
  	this.getTypeReleves();
  }

  getTypeReleves(): void{
    this.typeReleveService.getTypeReleves().subscribe((typeReleves) => {
      this.typeReleves = typeReleves;
    });
  }

}
