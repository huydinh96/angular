import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProcessingComponent } from './product-processing.component';

describe('ProductProcessingComponent', () => {
  let component: ProductProcessingComponent;
  let fixture: ComponentFixture<ProductProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
