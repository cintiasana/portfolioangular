import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgbannerComponent } from './imgbanner.component';

describe('ImgbannerComponent', () => {
  let component: ImgbannerComponent;
  let fixture: ComponentFixture<ImgbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
