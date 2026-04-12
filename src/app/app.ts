import { Component, computed, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User, Tasks],
})
export class App {
  users = DUMMY_USERS;
  name = signal<string | undefined>(undefined);

  onSelectUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      this.name.set(user.name);
    }
  }
}
