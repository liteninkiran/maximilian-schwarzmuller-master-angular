import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { USERS } from './dummy-data';
import { CommonModule } from '@angular/common';
import { UserObject } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User, Tasks, CommonModule],
})
export class App {
  users = USERS;
  selectedUser = signal<UserObject | undefined>(undefined);

  onSelectUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      this.selectedUser.set(user);
    }
  }
}
