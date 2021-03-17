import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  @Output()
  closeModal: EventEmitter<string> = new EventEmitter<string>();

  authenticationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authenticationForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  ngOnInit(): void {
  }

  authenticate(): void{
    console.log(this.authenticationForm.value);
    this.close('close modal after authentication');
  }

  close(reason: string): void {
    this.closeModal.emit(reason);
  }


}
