import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logoempresa2Component } from './logoempresa2.component';

describe('Logoempresa2Component', () => {
  let component: Logoempresa2Component;
  let fixture: ComponentFixture<Logoempresa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logoempresa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logoempresa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
