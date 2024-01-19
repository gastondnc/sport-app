import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsIconsComponent } from './sports-icons.component';

describe('SportsIconsComponent', () => {
  let component: SportsIconsComponent;
  let fixture: ComponentFixture<SportsIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsIconsComponent]
    });
    fixture = TestBed.createComponent(SportsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
