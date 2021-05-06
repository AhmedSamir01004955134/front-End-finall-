import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbleComponent } from './tabble.component';

describe('TabbleComponent', () => {
  let component: TabbleComponent;
  let fixture: ComponentFixture<TabbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
