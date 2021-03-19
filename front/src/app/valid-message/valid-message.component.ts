import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-valid-message',
  templateUrl: './valid-message.component.html',
  styleUrls: ['./valid-message.component.css']
})
export class ValidMessageComponent implements OnInit {

  @Input()
  message: string;

  constructor() {
    this.message = 'valide';
  }

  ngOnInit(): void {
  }

}
