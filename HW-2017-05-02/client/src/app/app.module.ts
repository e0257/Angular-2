import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MaterialModule } from '@angular/material';
import {MdInputModule}    from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { DashboardComponent }  from "./dashboard/dashboard.component"
import { StatisticsComponent } from "./statistics/statistics.component"
import { TaskComponent }  from "./task/task.component"
import { TaskEditComponent }  from "./task/edit/task-edit.component"
import { AppComponent } from "./app.component";
import { StatisticsService } from "./statistics/statistics.service";
import { TaskService } from "./task/task.service";
import { AppService } from "./app.service";
import { routes } from "./app.routes";

import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        MdInputModule,
        FormsModule,
        BrowserAnimationsModule,      
        RouterModule.forRoot(routes),
        FilmCardComponent,
    ],
    declarations: [
        AppComponent, 
        DashboardComponent, 
        TaskComponent, 
        TaskEditComponent,
        StatisticsComponent
    ],
    providers: [FilmCardService, StatisticsService, TaskService, AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
