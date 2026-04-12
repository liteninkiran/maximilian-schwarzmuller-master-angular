// Angular
import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from '../shared/card/card';

// Types
import { UserObject } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [CommonModule, CardComponent],
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
