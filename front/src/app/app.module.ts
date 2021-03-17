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

const appRoutes: Routes = [
  { path: 'informations', component: AccueilComponent },
  { path: '', component: AccueilComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthentificationComponent,
    AccueilComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    [RouterModule.forRoot(appRoutes)],
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
