import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex()]);
  imagePath = computed(() => `users/${this.selectedUser().avatar}`);

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[randomIndex()]);
  }
}
