import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User],
})
export class App {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log(`Selected user with ID: ${id}`);
  }
}
