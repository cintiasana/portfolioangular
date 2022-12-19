import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuverticalComponent } from './menuvertical.component';

describe('MenuverticalComponent', () => {
  let component: MenuverticalComponent;
  let fixture: ComponentFixture<MenuverticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuverticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
