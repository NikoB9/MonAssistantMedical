import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';

@Component({
  selector: 'app-analyse-page',
  templateUrl: './analyse-page.component.html',
  styleUrls: ['./analyse-page.component.css']
})
export class AnalysePageComponent implements OnInit {

  navElems: Menu;

  constructor() {
    this.navElems = {accueil: false, releves: false, analyses: true, profil: false};
  }

  ngOnInit(): void {
  }

}
