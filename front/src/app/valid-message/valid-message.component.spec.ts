import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidMessageComponent } from './valid-message.component';

describe('ValidMessageComponent', () => {
  let component: ValidMessageComponent;
  let fixture: ComponentFixture<ValidMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
