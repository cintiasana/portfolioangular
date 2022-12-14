import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproyectoComponent } from './detalleproyecto.component';

describe('DetalleproyectoComponent', () => {
  let component: DetalleproyectoComponent;
  let fixture: ComponentFixture<DetalleproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
