import { Component, OnInit, Injectable, Output, EventEmitter} from '@angular/core';
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
  selector: 'app-creation-releve',
  templateUrl: './creation-releve.component.html',
  styleUrls: ['./creation-releve.component.css'],

  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
    NgbInputDatepickerConfig
  ]
})

export class CreationReleveComponent implements OnInit {

  error: boolean;
  errorMessage: string;
  addReleveForm: FormGroup;
  userId: string | null;
  add: boolean;
  validMessage: string;
  typeReleves: TypeReleve[];
  noIMC = true;
  today: NgbDate;

  @Output()
  createReleve: EventEmitter<Releve> = new EventEmitter<Releve>();

  constructor(private fb: FormBuilder, private typeReleveService: TypeReleveService, private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private config: NgbInputDatepickerConfig, private releveService: ReleveService) {
  	this.typeReleves = [];
   this.error = false;
   this.errorMessage = 'Un problème est survenu. Vérifiez votre connexion.';
   this.userId = sessionStorage.getItem('id');
   this.add = false;
   this.validMessage = 'Le relevé a bien été ajouté.';
   this.today = this.calendar.getToday();

   this.addReleveForm = this.fb.group({
      TypeReleveId: ['1', Validators.required],
      valeur: ['', Validators.required],
      value2: ['', Validators.required],
      prise_de_mesure: [this.dateAdapter.toModel(this.today)!, Validators.required],
    });

  }

  ngOnInit(): void {
  	this.getTypeReleves();
  }

  getTypeReleves(): void{
    this.typeReleveService.getTypeReleves().subscribe((typeReleves) => {
      this.typeReleves = typeReleves;
    });
  }

  choiceIMC(): void {
    const label = this.addReleveForm.value.TypeReleveId;

    if (label === '6') {
      this.noIMC = false;
    } else {
      this.noIMC = true;
  	}
  }

  create(): void {
  	this.addReleveForm.value.UtilisateurId = this.userId;

    const splitDate = this.addReleveForm.value.prise_de_mesure.split('-');

    this.addReleveForm.value.prise_de_mesure = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

  	this.createReleve.emit(this.addReleveForm.value);
  }
}











