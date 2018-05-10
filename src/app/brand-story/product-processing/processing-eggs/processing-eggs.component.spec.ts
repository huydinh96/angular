import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingEggsComponent } from './processing-eggs.component';

describe('ProcessingEggsComponent', () => {
  let component: ProcessingEggsComponent;
  let fixture: ComponentFixture<ProcessingEggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingEggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingEggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
