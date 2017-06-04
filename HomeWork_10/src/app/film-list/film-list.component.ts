import { Component, OnInit, Input } from '@angular/core';
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
  loading: boolean = false;
  viewCurrent: string = 'View 1';
  rowHeightCurrent: string = '850px';
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = 'Star';
    this.getFilms();
  }

  setFilm(film: string) {
    this.filmName = film;
    this.getFilms();
  }

  setView(view: string) {
    this.viewCurrent = view;
    this.setRowHight(view);
  }

 private setRowHight(view){
    if(view == 'View 1'){
    this.rowHeightCurrent = '800px';}
    if(view == 'View 2'){
    this.rowHeightCurrent = '400px';}
  }

  private getFilms() {
    this.loading = true;
    if (!this.filmName) { return; }
    this.filmCardService.getFilms(this.filmName).subscribe(filmList => {
      this.filmList = filmList;
      this.loading = false;
    })
  }

  private addFilms() {
    this.loading = true;
    if (!this.filmName) { return; }
    this.filmCardService.getPageFilms(this.filmName).subscribe(filmList => {
      this.filmList = this.filmList.concat(filmList);
      this.loading = false;
    })
  }
}

