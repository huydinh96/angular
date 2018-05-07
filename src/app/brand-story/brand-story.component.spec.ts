import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStoryComponent } from './brand-story.component';

describe('BrandStoryComponent', () => {
  let component: BrandStoryComponent;
  let fixture: ComponentFixture<BrandStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
