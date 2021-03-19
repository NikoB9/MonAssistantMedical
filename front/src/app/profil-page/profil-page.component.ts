import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  navElems: Menu;
  connected: boolean;
  errorMessage: string;

  constructor() {
    this.navElems = {accueil: false, releves: false, analyses: false, profil: true};
    this.connected = sessionStorage?.getItem('id') !== null;
    this.errorMessage = 'Vous êtes déconnecté. Veuillez vous connecter afin d\'accéder à cette page';
  }

  ngOnInit(): void {
  }

}
