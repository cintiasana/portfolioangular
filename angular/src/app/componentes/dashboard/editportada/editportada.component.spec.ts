import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditportadaComponent } from './editportada.component';

describe('EditportadaComponent', () => {
  let component: EditportadaComponent;
  let fixture: ComponentFixture<EditportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditportadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
