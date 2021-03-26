import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { ReleveService } from '../services/releve.service';
import { TypeReleveService } from '../services/type-releve.service';
import { Releve, ComplexeReleve } from '../models/releve.model';
import { TypeReleve } from '../models/typeReleve.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-releve',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.css']
})

export class ReleveComponent implements OnInit {
  releves?: ComplexeReleve[];
  id: string | null;
  typeReleves: TypeReleve[];
  switchTypeForm: FormGroup;
  idType: string;

  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService, private releveService: ReleveService, private typeReleveService: TypeReleveService) {
    this.id = sessionStorage?.getItem('id');
    this.typeReleves = [];
    this.switchTypeForm = this.fb.group({
      typeReleve: ['', Validators.required],
    });
    this.idType = '-1';
  }

  ngOnInit(): void {
    this.getReleves();
    this.getTypeReleves();
  }

  getReleves(): void{
    if (this.idType === '-1'){
      this.utilisateurService.getUserReleves(this.id).subscribe((releves) => {
        this.releves = releves;
      });
    }
    else {
      this.utilisateurService.getUserRelevesFilterType(this.id, this.idType).subscribe((releves) => {
        console.log(releves);
        this.releves = releves;
      });
    }
  }

  dateFormat(date: string): string {
    const dateSplit = date.split('-');

    return '' + dateSplit[2].split('T')[0] + '/' + dateSplit[1] + '/' + dateSplit[0];
  }

  deleteReleve(id: number): void{
    this.releveService.deleteReleves(id).subscribe((supression) => {
      if (supression) {
        this.getReleves();
      } // TODO else avec msg d'erreur
    });
  }

  create(releve: Releve): void {
    this.releveService.createReleve(releve).subscribe((releve) => {
      this.getReleves();
    });
  }

  getTypeReleves(): void{
    this.typeReleveService.getTypeReleves().subscribe((typeReleves) => {
      this.typeReleves = typeReleves;
    });
  }

  selectType(): void{
    this.idType = this.switchTypeForm.value.typeReleve;
    console.log(this.idType);
    this.getReleves();
  }
}







