import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgproyectoComponent } from './imgproyecto.component';

describe('ImgproyectoComponent', () => {
  let component: ImgproyectoComponent;
  let fixture: ComponentFixture<ImgproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
