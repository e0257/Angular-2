import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListFavoritesComponent } from './films-list-favorites.component';

describe('FilmsListFavoritesComponent', () => {
  let component: FilmsListFavoritesComponent;
  let fixture: ComponentFixture<FilmsListFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsListFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
