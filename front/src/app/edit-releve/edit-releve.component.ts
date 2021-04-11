import { Component, OnInit, Injectable, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeReleveService} from '../services/type-releve.service';
import {TypeReleve} from '../models/typeReleve.model';
import {Releve} from '../models/releve.model';
import {ReleveService} from '../services/releve.service';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbInputDatepickerConfig, NgbDate} from '@ng-bootstrap/ng-bootstrap';


/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  addZero(num: number): string {
  	return num > 9 ? '' + num : '0' + num;
  }

  format(date: NgbDateStruct | null): string {
    return date ? this.addZero(date.day) + this.DELIMITER + this.addZero(date.month) + this.DELIMITER + this.addZero(date.year) : '';
  }
}

@Component({
  selector: 'app-edit-releve',
  templateUrl: './edit-releve.component.html',
  styleUrls: ['./edit-releve.component.css'],

  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
    NgbInputDatepickerConfig
  ]
})

export class EditReleveComponent implements OnInit {

  error: boolean;
  errorMessage: string;
  editReleveForm: FormGroup;
  userId: string | null;
  add: boolean;
  validMessage: string;
  typeReleves: TypeReleve[];
  today: NgbDate;

  @Input()
  idReleve: number;

  @Output()
  editReleve: EventEmitter<Releve> = new EventEmitter<Releve>();

  constructor(private fb: FormBuilder, private typeReleveService: TypeReleveService, private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private config: NgbInputDatepickerConfig, private releveService: ReleveService) {
  	this.typeReleves = [];
    this.error = false;
    this.errorMessage = 'Un problème est survenu. Vérifiez votre connexion.';
    this.userId = sessionStorage.getItem('id');
    this.add = false;
    this.validMessage = 'Le relevé a bien été modifié.';
    this.today = this.calendar.getToday();
    this.idReleve = 0;
    this.editReleveForm = this.fb.group({
      TypeReleveId: ['', Validators.required],
      valeur: ['', Validators.required],
      prise_de_mesure: ['', Validators.required], 
    });

  }

  ngOnInit(): void {
  	this.getTypeReleves();

  	this.releveService.getReleve(this.idReleve).subscribe((releve) => {

	  const dateSplit = releve.prise_de_mesure.split('-');
      const dateMesure = {year: +dateSplit[0], month: +dateSplit[1], day: +dateSplit[2].split(' ')[0]};

  	  this.editReleveForm = this.fb.group({
  	  	id: [this.idReleve, Validators.required],
	    TypeReleveId: [releve.TypeReleveId, Validators.required],
	    valeur: [releve.valeur, Validators.required],
	    prise_de_mesure: [this.dateAdapter.toModel(dateMesure)!, Validators.required], 
	  });
  	});
  }

  getTypeReleves(): void{
    this.typeReleveService.getTypeReleves().subscribe((typeReleves) => {
      this.typeReleves = typeReleves;
    });
  }

  edit(): void {
  	this.editReleveForm.value.UtilisateurId = this.userId;

    const splitDate = this.editReleveForm.value.prise_de_mesure.split('-');

    this.editReleveForm.value.prise_de_mesure = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

  	this.editReleve.emit(this.editReleveForm.value);
  }
}
