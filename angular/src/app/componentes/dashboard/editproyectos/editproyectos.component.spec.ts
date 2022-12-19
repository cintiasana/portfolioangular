import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyectosComponent } from './editproyectos.component';

describe('EditproyectosComponent', () => {
  let component: EditproyectosComponent;
  let fixture: ComponentFixture<EditproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
