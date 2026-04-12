import { Component, EventEmitter, Input, Output } from '@angular/core';

const inputOptions = { required: true };

export type UserObject = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  @Input(inputOptions) user!: UserObject;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
