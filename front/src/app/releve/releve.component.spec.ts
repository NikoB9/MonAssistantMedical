import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveComponent } from './releve.component';

describe('ReleveComponent', () => {
  let component: ReleveComponent;
  let fixture: ComponentFixture<ReleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
