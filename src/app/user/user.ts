import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `users/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
    console.log('Clicked!');
  }
}
