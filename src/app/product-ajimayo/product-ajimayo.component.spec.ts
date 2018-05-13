import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAjimayoComponent } from './product-ajimayo.component';

describe('ProductAjimayoComponent', () => {
  let component: ProductAjimayoComponent;
  let fixture: ComponentFixture<ProductAjimayoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAjimayoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAjimayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
