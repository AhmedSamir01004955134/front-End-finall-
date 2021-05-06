import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenarComponent } from './bartenar.component';

describe('BartenarComponent', () => {
  let component: BartenarComponent;
  let fixture: ComponentFixture<BartenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BartenarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
