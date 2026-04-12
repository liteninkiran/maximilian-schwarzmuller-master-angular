// Angular
import { Component, signal } from '@angular/core';

// Types
import { type UserObject } from './models/user.model';

// Data
import { USERS } from './dummy-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
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
