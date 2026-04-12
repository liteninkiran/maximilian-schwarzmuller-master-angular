import { Component, computed, input, output } from '@angular/core';
import { UserObject } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [CommonModule],
})
export class User {
  user = input.required<UserObject>();
  isSelected = input.required<boolean>();
  select = output<string>();
  imagePath = computed(() => `users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
