import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNutritionComponent } from './info-nutrition.component';

describe('InfoNutritionComponent', () => {
  let component: InfoNutritionComponent;
  let fixture: ComponentFixture<InfoNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
