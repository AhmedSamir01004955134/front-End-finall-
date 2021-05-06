import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopeComponent } from './view-shope.component';

describe('ViewShopeComponent', () => {
  let component: ViewShopeComponent;
  let fixture: ComponentFixture<ViewShopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
