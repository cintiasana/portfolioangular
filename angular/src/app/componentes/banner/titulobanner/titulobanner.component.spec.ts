import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulobannerComponent } from './titulobanner.component';

describe('TitulobannerComponent', () => {
  let component: TitulobannerComponent;
  let fixture: ComponentFixture<TitulobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
