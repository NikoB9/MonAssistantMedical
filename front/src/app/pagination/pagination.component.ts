import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  actualPage: number;

  @Input()
  maxPage?: number;

  @Input()
  pages: number[];

  @Output()
  goToPre: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  goToNext: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  goToPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.actualPage = 1;
    this.pages = [];
  }

  ngOnInit(): void {
  }

  pre(): void{

  	this.goToPre.emit();
  }

  next(): void{

  	this.goToNext.emit();
  }

  page(page: number): void{

  	this.goToPage.emit(page);
  }

}








