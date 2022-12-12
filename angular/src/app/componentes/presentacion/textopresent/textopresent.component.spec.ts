import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextopresentComponent } from './textopresent.component';

describe('TextopresentComponent', () => {
  let component: TextopresentComponent;
  let fixture: ComponentFixture<TextopresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextopresentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextopresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
