import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClinicaComponent } from './ver-clinica.component';

describe('VerClinicaComponent', () => {
  let component: VerClinicaComponent;
  let fixture: ComponentFixture<VerClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerClinicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
