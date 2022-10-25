import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSheetDailogComponent } from './time-sheet-dailog.component';

describe('TimeSheetDailogComponent', () => {
  let component: TimeSheetDailogComponent;
  let fixture: ComponentFixture<TimeSheetDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSheetDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheetDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
