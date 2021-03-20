import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './accueil/accueil.component';

import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import {HttpClientModule} from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { AnalysePageComponent } from './analyse-page/analyse-page.component';
import { RelevePageComponent } from './releve-page/releve-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditProfilsComponent } from './edit-profils/edit-profils.component';
import { ValidMessageComponent } from './valid-message/valid-message.component';
import {ProfilService} from './services/profil.service';
import {UtilisateurService} from './services/utilisateur.service';

const appRoutes: Routes = [
  { path: 'informations', component: AccueilComponent },
  { path: '', component: AccueilComponent },
  { path: 'profil', component: ProfilPageComponent },
  { path: 'releves', component: RelevePageComponent },
  { path: 'analyses', component: AnalysePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthentificationComponent,
    AccueilComponent,
    CreateUserComponent,
    ErrorMessageComponent,
    ProfilPageComponent,
    AnalysePageComponent,
    RelevePageComponent,
    EditUserComponent,
    EditProfilsComponent,
    ValidMessageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    [RouterModule.forRoot(appRoutes)],
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UtilisateurService,
    ProfilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
