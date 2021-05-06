import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOfWeekComponent } from './deal-of-week.component';

describe('DealOfWeekComponent', () => {
  let component: DealOfWeekComponent;
  let fixture: ComponentFixture<DealOfWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealOfWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealOfWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
