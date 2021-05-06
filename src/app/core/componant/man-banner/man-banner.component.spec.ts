import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManBannerComponent } from './man-banner.component';

describe('ManBannerComponent', () => {
  let component: ManBannerComponent;
  let fixture: ComponentFixture<ManBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
