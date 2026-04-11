import { Component, Input } from '@angular/core';

const inputOptions = { required: true };

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  @Input(inputOptions) avatar!: string;
  @Input(inputOptions) name!: string;

  get imagePath() {
    return `users/${this.avatar}`;
  }

  onSelectUser() {}
}
