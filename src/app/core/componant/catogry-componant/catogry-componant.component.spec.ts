import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogryComponantComponent } from './catogry-componant.component';

describe('CatogryComponantComponent', () => {
  let component: CatogryComponantComponent;
  let fixture: ComponentFixture<CatogryComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogryComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogryComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
