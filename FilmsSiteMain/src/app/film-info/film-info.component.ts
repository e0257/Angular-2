import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  filmDetail;
  imgUrl = this.filmService.imgURL;
  backgroundUrl;
  actorsList = [];
  isFavorite: boolean;
  filmId: number;
  emptyAvatar = 'assets/avatar.jpg';


  constructor(private activateRoute: ActivatedRoute,
    private filmService: FilmService,
    private renderer: Renderer2,
    private myElement: ElementRef) {
    this.filmId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.inFavorite();
    this.filmService.searchMenu = false;
    this.getFilmById(this.filmId);
    this.getActors(this.filmId);
  }

  toFavorite() {
    let film = { filmId: this.filmId, status: this.isFavorite }
    this.filmService.saveFavoriteItem(film).subscribe(data => {
      console.log(data);
      console.log("favorite");
    })
  }

  inFavorite() {
    this.filmService.inFavorite({ filmId: this.filmId }).subscribe(data => {
      this.isFavorite = data.status;
      console.log(this.isFavorite);
      console.log("check");
    })
  }
  getFilmById(filmId) {
    this.filmService.getFilmById(filmId).subscribe(
      filmDetail => {
        this.filmDetail = filmDetail;
        this.backgroundUrl = this.imgUrl.slice(0, -1) + filmDetail.backdrop_path;
        this.renderer.setStyle(document.body, 'background', " url(' " + this.backgroundUrl + "') no-repeat");
        this.renderer.setStyle(document.body, 'backgroundAttachment', 'fixed');
        this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
        console.log(filmDetail);
      },
      err => {
        console.log(err);
      },
      () => { })
  }

  getActors(filmId) {
    this.filmService.getActors(filmId).subscribe(
      actors => {
        this.actorsList = actors;
        console.log(actors)
      },
      err => {
        console.log(err);
      },
      () => { })
  }

  chkActorsPath(path) {
    return !path
      ? this.emptyAvatar
      : this.imgUrl + path;
  }

  getGenres() {
    return this.filmDetail.genres.map(e => e.name).join(",") || "";
  }
}
