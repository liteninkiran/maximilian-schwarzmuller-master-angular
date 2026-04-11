import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return `users/${this.avatar}`;
  }

  onSelectUser() {}
}
