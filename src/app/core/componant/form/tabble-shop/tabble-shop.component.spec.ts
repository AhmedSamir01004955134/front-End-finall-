import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbleShopComponent } from './tabble-shop.component';

describe('TabbleShopComponent', () => {
  let component: TabbleShopComponent;
  let fixture: ComponentFixture<TabbleShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbleShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
