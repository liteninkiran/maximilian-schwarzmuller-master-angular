import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User as UserType } from './dummy-users';

const inputOptions = { required: true };

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  @Input(inputOptions) user!: UserType;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
