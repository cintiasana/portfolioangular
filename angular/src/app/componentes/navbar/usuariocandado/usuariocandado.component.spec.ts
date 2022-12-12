import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariocandadoComponent } from './usuariocandado.component';

describe('UsuariocandadoComponent', () => {
  let component: UsuariocandadoComponent;
  let fixture: ComponentFixture<UsuariocandadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariocandadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariocandadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
