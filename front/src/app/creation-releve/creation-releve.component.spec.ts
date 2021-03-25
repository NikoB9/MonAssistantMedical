import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationReleveComponent } from './creation-releve.component';

describe('CreationReleveComponent', () => {
  let component: CreationReleveComponent;
  let fixture: ComponentFixture<CreationReleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationReleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationReleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
