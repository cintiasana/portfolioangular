import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripuestoComponent } from './descripuesto.component';

describe('DescripuestoComponent', () => {
  let component: DescripuestoComponent;
  let fixture: ComponentFixture<DescripuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
