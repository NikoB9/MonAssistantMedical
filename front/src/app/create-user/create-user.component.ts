import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../models/utilisateur.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output()
  closeModal: EventEmitter<string> = new EventEmitter<string>();

  createUserForm: FormGroup;
  error: boolean;
  errorMessage: string;

  constructor(private fb: FormBuilder, private userService: UtilisateurService) {
    this.createUserForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      naissance: ['', Validators.required],
      login: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });

    this.errorMessage = 'Une erreur est survenue';
    this.error = false;
  }


  ngOnInit(): void {
  }

  create(): void{
    this.createUserForm.value.naissance = `${this.createUserForm.value.naissance.year}-${this.createUserForm.value.naissance.month}-${this.createUserForm.value.naissance.day}`;
    console.log(this.createUserForm.value);
    this.userService.createUser(this.createUserForm.value).subscribe( (user) => {

      console.log(user);

      if (user as Utilisateur){
        sessionStorage.setItem('id', String(user.id));
        sessionStorage.setItem('login', String(user.login));
        this.close('close modal after création');
      }
      else {
        this.error = true;
        console.log('Une erreur est survenue');
      }

    });

  }

  close(reason: string): void {
    this.closeModal.emit(reason);
  }

}
