import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopeComponent } from './edit-shope.component';

describe('EditShopeComponent', () => {
  let component: EditShopeComponent;
  let fixture: ComponentFixture<EditShopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
