import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../int-film';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string;
  @Input()
  view: string;
  filmItem: Film = {
    Released: '',
    Plot: '',
    Genre: '',
    imdbRating: '',
    Director: '',
    Runtime: ''
  };
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    if (!this.filmId) { return; }
    this.filmService.getFilmById(this.filmId).subscribe((film: Film) => {
      this.filmItem = film;
    })
  }

}
