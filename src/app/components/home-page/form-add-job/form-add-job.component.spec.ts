import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddJobComponent } from './form-add-job.component';

describe('FormAddJobComponent', () => {
  let component: FormAddJobComponent;
  let fixture: ComponentFixture<FormAddJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
