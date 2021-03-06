import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../int-film';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList: Film[] = [];
  filmName: string;
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = 'Star';
    this.getFilms();
  }

  private getFilms() {
    if (!this.filmName) { return; }
    this.filmCardService.getFilms(this.filmName).subscribe(filmList => {
      this.filmList = filmList;
    })
  }
}

