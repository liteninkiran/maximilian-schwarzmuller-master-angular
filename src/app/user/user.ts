import { Component, EventEmitter, Input, Output } from '@angular/core';

const inputOptions = { required: true };

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  @Input(inputOptions) id!: string;
  @Input(inputOptions) avatar!: string;
  @Input(inputOptions) name!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
