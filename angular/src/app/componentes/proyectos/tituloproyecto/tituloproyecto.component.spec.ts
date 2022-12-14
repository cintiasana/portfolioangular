import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloproyectoComponent } from './tituloproyecto.component';

describe('TituloproyectoComponent', () => {
  let component: TituloproyectoComponent;
  let fixture: ComponentFixture<TituloproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
