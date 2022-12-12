import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreperfilComponent } from './nombreperfil.component';

describe('NombreperfilComponent', () => {
  let component: NombreperfilComponent;
  let fixture: ComponentFixture<NombreperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
