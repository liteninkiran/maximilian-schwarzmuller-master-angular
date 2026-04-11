import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => `users/${this.avatar()}`);

  onSelectUser() {}
}
