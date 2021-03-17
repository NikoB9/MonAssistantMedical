import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../models/menu.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  closeResult = '';
  active = 1;

  @Input()
  navElems?: Menu;
  connected: boolean;
  login?: string | null;

  constructor(private modalService: NgbModal) {
    /*this.navElems = {accueil: true, releves: false, analyses: false, profil: false};*/
    this.connected = sessionStorage?.getItem('id') !== null;
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(reason: string): void {
    this.modalService.dismissAll(reason);
    this.connected = true;
    this.login = sessionStorage.getItem('login');
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }


  }

  disconnect(): void {
    this.connected = false;
    sessionStorage.clear();
  }

  ngOnInit(): void {

    if (sessionStorage?.getItem('id') !== null){
      this.login = sessionStorage.getItem('login');
    }

  }

}
