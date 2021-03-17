import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';

@Component({
  selector: 'app-releve-page',
  templateUrl: './releve-page.component.html',
  styleUrls: ['./releve-page.component.css']
})
export class RelevePageComponent implements OnInit {

  navElems: Menu;

  constructor() {
    this.navElems = {accueil: false, releves: true, analyses: false, profil: false};
  }

  ngOnInit(): void {
  }

}
