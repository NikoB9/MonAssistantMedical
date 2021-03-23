import { Component, OnInit } from '@angular/core';
import { ReleveService } from '../releve.service';
import {Observable} from "rxjs/Observable";
import {Releve } from '../models/releve.models';

@Component({
  selector: 'app-releve',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.css']
})

export class ReleveComponent implements OnInit {
  releves?: Observable<Releve[]>;

  constructor(private releveService: ReleveService) {
  }

  ngOnInit() {
    this.releves = this.releveService.getReleves();
  }

 }