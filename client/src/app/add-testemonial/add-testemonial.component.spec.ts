import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestemonialComponent } from './add-testemonial.component';

describe('AddTestemonialComponent', () => {
  let component: AddTestemonialComponent;
  let fixture: ComponentFixture<AddTestemonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestemonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestemonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
