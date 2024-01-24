import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportItemsComponent } from './sport-items.component';

describe('SportItemsComponent', () => {
  let component: SportItemsComponent;
  let fixture: ComponentFixture<SportItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportItemsComponent]
    });
    fixture = TestBed.createComponent(SportItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
