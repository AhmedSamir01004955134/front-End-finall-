import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSlaidrComponent } from './hero-slaidr.component';

describe('HeroSlaidrComponent', () => {
  let component: HeroSlaidrComponent;
  let fixture: ComponentFixture<HeroSlaidrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSlaidrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSlaidrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
