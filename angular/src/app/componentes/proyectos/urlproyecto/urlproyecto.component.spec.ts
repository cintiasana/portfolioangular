import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlproyectoComponent } from './urlproyecto.component';

describe('UrlproyectoComponent', () => {
  let component: UrlproyectoComponent;
  let fixture: ComponentFixture<UrlproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
