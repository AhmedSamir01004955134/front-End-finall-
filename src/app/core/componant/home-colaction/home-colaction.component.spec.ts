import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeColactionComponent } from './home-colaction.component';

describe('HomeColactionComponent', () => {
  let component: HomeColactionComponent;
  let fixture: ComponentFixture<HomeColactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeColactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeColactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
