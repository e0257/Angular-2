import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Каталог фильмов';

  links = [
    { path: '/dashboard', icon: 'desktop_windows', label: 'Главная' },
    { path: '/filmList', icon: 'theaters', label: 'Все фильмы' },
    { path: '/profile', icon: 'settings_applications', label: 'Профиль' }
  ];
}
