import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilSliderComponent } from './acceuil-slider.component';

describe('AcceuilSliderComponent', () => {
  let component: AcceuilSliderComponent;
  let fixture: ComponentFixture<AcceuilSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilSliderComponent]
    });
    fixture = TestBed.createComponent(AcceuilSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
