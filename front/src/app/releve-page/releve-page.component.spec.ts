import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevePageComponent } from './releve-page.component';

describe('RelevePageComponent', () => {
  let component: RelevePageComponent;
  let fixture: ComponentFixture<RelevePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
