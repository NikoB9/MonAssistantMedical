import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  navElems: Menu;

  constructor() {
    this.navElems = {accueil: false, releves: false, analyses: false, profil: true};
  }

  ngOnInit(): void {
  }

}
