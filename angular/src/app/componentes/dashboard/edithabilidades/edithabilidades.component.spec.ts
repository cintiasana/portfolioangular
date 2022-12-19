import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithabilidadesComponent } from './edithabilidades.component';

describe('EdithabilidadesComponent', () => {
  let component: EdithabilidadesComponent;
  let fixture: ComponentFixture<EdithabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
