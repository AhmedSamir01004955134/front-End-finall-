import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwcatogresComponent } from './viwcatogres.component';

describe('ViwcatogresComponent', () => {
  let component: ViwcatogresComponent;
  let fixture: ComponentFixture<ViwcatogresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwcatogresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwcatogresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
