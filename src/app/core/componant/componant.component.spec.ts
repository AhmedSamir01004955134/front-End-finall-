import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponantComponent } from './componant.component';

describe('ComponantComponent', () => {
  let component: ComponantComponent;
  let fixture: ComponentFixture<ComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
