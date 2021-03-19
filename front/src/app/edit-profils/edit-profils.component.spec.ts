import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilsComponent } from './edit-profils.component';

describe('EditProfilsComponent', () => {
  let component: EditProfilsComponent;
  let fixture: ComponentFixture<EditProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
