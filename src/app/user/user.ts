import { Component, computed, input, output } from '@angular/core';
import { UserObject } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [],
})
export class User {
  user = input.required<UserObject>();
  select = output<string>();
  imagePath = computed(() => `users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
