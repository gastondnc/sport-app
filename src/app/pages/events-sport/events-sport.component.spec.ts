import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSportComponent } from './events-sport.component';

describe('EventsSportComponent', () => {
  let component: EventsSportComponent;
  let fixture: ComponentFixture<EventsSportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSportComponent]
    });
    fixture = TestBed.createComponent(EventsSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
