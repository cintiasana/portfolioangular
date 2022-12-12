import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioabiertoComponent } from './usuarioabierto.component';

describe('UsuarioabiertoComponent', () => {
  let component: UsuarioabiertoComponent;
  let fixture: ComponentFixture<UsuarioabiertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioabiertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioabiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
