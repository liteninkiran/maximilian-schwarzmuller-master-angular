import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User],
})
export class App {
  protected readonly title = signal('angular-app');
}
