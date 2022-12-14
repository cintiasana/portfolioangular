import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcertificadoComponent } from './imgcertificado.component';

describe('ImgcertificadoComponent', () => {
  let component: ImgcertificadoComponent;
  let fixture: ComponentFixture<ImgcertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
