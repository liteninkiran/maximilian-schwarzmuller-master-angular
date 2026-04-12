import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User, UserObject } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './user/dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User, Tasks, CommonModule],
})
export class App {
  users = DUMMY_USERS;
  selectedUser = signal<UserObject | undefined>(undefined);

  onSelectUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      this.selectedUser.set(user);
    }
  }
}
