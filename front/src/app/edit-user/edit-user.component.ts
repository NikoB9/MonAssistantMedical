import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],

  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
    NgbInputDatepickerConfig
  ]
})


export class EditUserComponent implements OnInit {

  error: boolean;
  errorMessage: string;
  editUserForm: FormGroup;
  userId: string | null;
  update: boolean;
  validMessage: string;
  today: NgbDate;

  constructor(private fb: FormBuilder, private userService: UtilisateurService, private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private config: NgbInputDatepickerConfig) {
    this.error = false;
    this.errorMessage = 'Un problème est survenu. Vérifiez votre connexion.';
    this.editUserForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      naissance: ['', Validators.required],
      login: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });
    this.userId = sessionStorage.getItem('id');
    this.update = false;
    this.validMessage = 'La mise à jour de vos données est effective';
    this.today = this.calendar.getToday();
  }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe( (user) => {
      if (user as Utilisateur){

        const birthSplit = user.naissance.split('-');
        const birth = {year: +birthSplit[0], month: +birthSplit[1], day: +birthSplit[2].split(' ')[0]};

        this.editUserForm = this.fb.group({
          nom: [user.nom, Validators.required],
          prenom: [user.prenom, Validators.required],
          naissance: [this.dateAdapter.toModel(birth), Validators.required],
          login: [user.login, Validators.required],
          mot_de_passe: [user.mot_de_passe, Validators.required],
        });

      }
      else {
        this.error = true;
      }
    });
  }

  edit(): void {

    this.update = false;
    this.error = false;

    const splitDate = this.editUserForm.value.naissance.split('-');

    this.editUserForm.value.naissance = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe( (update) => {
      if (update){
        this.update = true;
      }
      else {
        this.error = true;
      }
    });

  }
}
