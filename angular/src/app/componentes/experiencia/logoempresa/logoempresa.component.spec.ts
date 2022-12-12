import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoempresaComponent } from './logoempresa.component';

describe('LogoempresaComponent', () => {
  let component: LogoempresaComponent;
  let fixture: ComponentFixture<LogoempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
