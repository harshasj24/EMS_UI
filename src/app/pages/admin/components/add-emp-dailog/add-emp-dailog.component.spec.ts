import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDailogComponent } from './add-emp-dailog.component';

describe('AddEmpDailogComponent', () => {
  let component: AddEmpDailogComponent;
  let fixture: ComponentFixture<AddEmpDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
