import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReleveComponent } from './edit-releve.component';

describe('EditReleveComponent', () => {
  let component: EditReleveComponent;
  let fixture: ComponentFixture<EditReleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
