import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenColactionComponent } from './women-colaction.component';

describe('WomenColactionComponent', () => {
  let component: WomenColactionComponent;
  let fixture: ComponentFixture<WomenColactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenColactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenColactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
