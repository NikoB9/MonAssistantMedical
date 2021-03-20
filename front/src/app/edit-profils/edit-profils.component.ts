import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../models/utilisateur.model';
import {Profil} from '../models/profil.model';
import {ProfilService} from '../services/profil.service';

@Component({
  selector: 'app-edit-profils',
  templateUrl: './edit-profils.component.html',
  styleUrls: ['./edit-profils.component.css']
})
export class EditProfilsComponent implements OnInit {

  user: Utilisateur;
  profils: Profil[];
  error: boolean;
  errorMessage: string;

  constructor(private profilService: ProfilService, private userService: UtilisateurService) {
    this.error = false;
    this.errorMessage = 'Un problème est survenu. Vérifiez votre connexion.';
    this.user = {
      id: 0,
      nom: '',
      prenom: '',
      login: '',
      mot_de_passe: '',
      naissance: '',
      Profils: [],
    };
    this.profils = [];
  }

  ngOnInit(): void {
    this.getUser();
    this.getProfils();
  }

  getUser(): void {
    this.userService.getUser(sessionStorage.getItem('id')).subscribe((user) => {
      if (user as Utilisateur) {

        this.user = user;

      } else {
        this.error = true;
      }
    });
  }

  getProfils(): void {
    this.profilService.getProfils().subscribe((profils) => {
      this.profils = profils;
    });
  }

  addProfil(idProfil: number): void {

    this.userService.addUserProfil(this.user.id, idProfil).subscribe( (add) => {

      if (add){
        this.getUser();
      }else { this.error = true; }
    });
  }

  deleteProfil(idProfil: number): void {

    this.userService.removeUserProfil(this.user.id, idProfil).subscribe( (del) => {

      if (del){
        this.getUser();
      }else { this.error = true; }
    });
  }

}
