import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulocertificadoComponent } from './titulocertificado.component';

describe('TitulocertificadoComponent', () => {
  let component: TitulocertificadoComponent;
  let fixture: ComponentFixture<TitulocertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulocertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulocertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
