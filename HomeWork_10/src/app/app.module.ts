import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import {MdToolbarModule, MdButtonModule, MdIconModule, MdAutocompleteModule,
  MdSidenavModule, MdSelectModule, MdProgressSpinnerModule} from '@angular/material';
import {MdCardModule, MdGridListModule, MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FilmService } from './film.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmSearchComponent } from './film-search/film-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    MdToolbarModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    MdAutocompleteModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
