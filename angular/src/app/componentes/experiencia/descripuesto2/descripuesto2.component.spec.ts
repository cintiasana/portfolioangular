import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Descripuesto2Component } from './descripuesto2.component';

describe('Descripuesto2Component', () => {
  let component: Descripuesto2Component;
  let fixture: ComponentFixture<Descripuesto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Descripuesto2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Descripuesto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
