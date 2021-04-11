import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { ReleveService } from '../services/releve.service';
import { TypeReleveService } from '../services/type-releve.service';
import { Releve, ComplexeReleve } from '../models/releve.model';
import { TypeReleve } from '../models/typeReleve.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  actualPage: number;
  maxPage?: number;
  pages: number[];
  closeResult = '';
  active = 1;
  idReleve: number;

  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService, private releveService: ReleveService, private typeReleveService: TypeReleveService, private modalService: NgbModal) {
    this.id = sessionStorage?.getItem('id');
    this.typeReleves = [];
    this.switchTypeForm = this.fb.group({
      typeReleve: ['', Validators.required],
    });
    this.idType = '-1';
    this.actualPage = 1;
    this.pages = [];
    this.idReleve = 0;

  }

  ngOnInit(): void {
    this.getReleves();
    this.getTypeReleves();
  }

  getReleves(): void{
    this.cursor("wait");
    if (this.idType === '-1'){
      this.utilisateurService.getUserRelevesFilterPage(this.id, this.actualPage).subscribe((releves) => {
        this.releves = releves.complexesReleves;
        this.maxPage = releves.nbPages;
        this.pages = Array(this.maxPage).fill(1).map((x, i) => i + 1);
        this.cursor("initial");
      });
    }
    else {
      this.utilisateurService.getUserRelevesFilterTypePage(this.id, this.idType, this.actualPage).subscribe((releves) => {
        this.releves = releves.complexesReleves;
        this.maxPage = releves.nbPages;
        this.pages = Array(this.maxPage).fill(1).map((x, i) => i + 1);
        this.cursor("initial");
      });
    }
  }

  dateFormat(date: string): string {
    const dateSplit = date.split('-');

    return '' + dateSplit[2].split(' ')[0] + '/' + dateSplit[1] + '/' + dateSplit[0];
  }

  deleteReleve(id: number): void{
    this.releveService.deleteReleves(id).subscribe((supression) => {
      if (supression) {
        this.getReleves();
      } 
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
    this.actualPage = 1;
    this.idType = this.switchTypeForm.value.typeReleve;
    this.getReleves();
  }

  pre(): void{
    this.actualPage--;
    this.getReleves();
  }

  next(): void{
    this.actualPage++;
    this.getReleves();
  }

  page(page: number): void{
    this.actualPage = page;
    this.getReleves();
  }

  open(content: any, idReleve: number): void {
    this.idReleve = idReleve;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(reason: string): void {
    this.modalService.dismissAll(reason);
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  edit(releve: Releve): void {
    this.releveService.editReleve(releve, releve.id).subscribe((releve) => {
      this.getReleves();
      this.close("Modification réussi.");
    });
  }

  cursor(cursorType: string) {
    document.getElementsByTagName("body")[0].style.cursor = cursorType;
  }
}