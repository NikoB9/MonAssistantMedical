import {Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../models/utilisateur.model';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbInputDatepickerConfig, NgbDate} from '@ng-bootstrap/ng-bootstrap';


/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
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
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  addZero(num: number): string {
    return num > 9 ? "" + num : "0" + num;
  }

  format(date: NgbDateStruct | null): string {
    return date ? this.addZero(date.day) + this.DELIMITER + this.addZero(date.month) + this.DELIMITER + this.addZero(date.year) : '';
  }
}


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],

  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
    NgbInputDatepickerConfig
  ]
})

export class CreateUserComponent implements OnInit {

  @Output()
  closeModal: EventEmitter<string> = new EventEmitter<string>();

  createUserForm: FormGroup;
  error: boolean;
  errorMessage: string;
  today: NgbDate;

  constructor(private fb: FormBuilder, private userService: UtilisateurService, private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private config: NgbInputDatepickerConfig) { 
    this.createUserForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      naissance: ['', Validators.required],
      login: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });

    this.errorMessage = 'Une erreur est survenue';
    this.error = false;
    this.today = this.calendar.getToday();
  }


  ngOnInit(): void {
  }

  create(): void{
    this.createUserForm.value.naissance = `${this.createUserForm.value.naissance.year}-${this.createUserForm.value.naissance.month}-${this.createUserForm.value.naissance.day}`;

    this.userService.createUser(this.createUserForm.value).subscribe( (user) => {

      if (user as Utilisateur){
        sessionStorage.setItem('id', String(user.id));
        sessionStorage.setItem('login', String(user.login));
        this.close('close modal after création');
      }
      else {
        this.error = true;
      }

    });

  }

  close(reason: string): void {
    this.closeModal.emit(reason);
  }

}
