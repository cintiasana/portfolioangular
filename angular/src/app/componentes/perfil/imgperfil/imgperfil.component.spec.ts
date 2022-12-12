import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgperfilComponent } from './imgperfil.component';

describe('ImgperfilComponent', () => {
  let component: ImgperfilComponent;
  let fixture: ComponentFixture<ImgperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
