import { Component, OnInit } from '@angular/core';
import {Menu} from "../models/menu.model";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  navElems: Menu;

  constructor() {
    this.navElems = {accueil: true, releves: false, analyses: false, profil: false};
  }

  ngOnInit(): void {


  }

}
