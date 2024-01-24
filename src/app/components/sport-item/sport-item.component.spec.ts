import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportItemComponent } from './sport-item.component';

describe('SportItemComponent', () => {
  let component: SportItemComponent;
  let fixture: ComponentFixture<SportItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportItemComponent]
    });
    fixture = TestBed.createComponent(SportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
