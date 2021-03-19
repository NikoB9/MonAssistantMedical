import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';

@Component({
  selector: 'app-releve-page',
  templateUrl: './releve-page.component.html',
  styleUrls: ['./releve-page.component.css']
})
export class RelevePageComponent implements OnInit {

  navElems: Menu;
  connected: boolean;
  errorMessage: string;

  constructor() {
    this.navElems = {accueil: false, releves: true, analyses: false, profil: false};
    this.connected = sessionStorage?.getItem('id') !== null;
    this.errorMessage = 'Vous êtes déconnecté. Veuillez vous connecter afin d\'accéder à cette page';
  }

  ngOnInit(): void {
  }

}
