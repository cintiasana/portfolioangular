import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonavbarComponent } from './logonavbar.component';

describe('LogonavbarComponent', () => {
  let component: LogonavbarComponent;
  let fixture: ComponentFixture<LogonavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogonavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogonavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
