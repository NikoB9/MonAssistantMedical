import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../models/utilisateur.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  error: boolean;
  errorMessage: string;
  editUserForm: FormGroup;
  userId: string | null;
  update: boolean;
  validMessage: string;

  constructor(private fb: FormBuilder, private userService: UtilisateurService) {
    this.error = false;
    this.errorMessage = 'Un problème est survenu. Vérifier votre connexion.';
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
  }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe( (user) => {
      if (user as Utilisateur){

        const birthSplit = user.naissance.split('-');
        const birth = {year: +birthSplit[0], month: +birthSplit[1], day: +birthSplit[2].split('T')[0]};

        this.editUserForm = this.fb.group({
          nom: [user.nom, Validators.required],
          prenom: [user.prenom, Validators.required],
          naissance: [birth, Validators.required],
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

    this.editUserForm.value.naissance = `${this.editUserForm.value.naissance.year}-${this.editUserForm.value.naissance.month}-${this.editUserForm.value.naissance.day}`;

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
