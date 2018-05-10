import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingMixtureComponent } from './processing-mixture.component';

describe('ProcessingMixtureComponent', () => {
  let component: ProcessingMixtureComponent;
  let fixture: ComponentFixture<ProcessingMixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingMixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingMixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
