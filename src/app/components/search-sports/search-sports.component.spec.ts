import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSportsComponent } from './search-sports.component';

describe('SearchSportsComponent', () => {
  let component: SearchSportsComponent;
  let fixture: ComponentFixture<SearchSportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSportsComponent]
    });
    fixture = TestBed.createComponent(SearchSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
