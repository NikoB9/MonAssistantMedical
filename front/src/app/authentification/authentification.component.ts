import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../models/utilisateur.model';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  @Output()
  closeModal: EventEmitter<string> = new EventEmitter<string>();

  authenticationForm: FormGroup;
  error: boolean;
  errorMessage: string;

  constructor(private fb: FormBuilder, private userService: UtilisateurService) {
    this.authenticationForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.errorMessage = 'Login ou mot de passe incorrect';
    this.error = false;
  }


  ngOnInit(): void {
  }

  authenticate(): void{

    this.userService.authenticate(this.authenticationForm.value).subscribe( (user) => {

      if (user as Utilisateur){
        sessionStorage.setItem('id', String(user.id));
        sessionStorage.setItem('login', String(user.login));
        this.close('close modal after authentication');
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
