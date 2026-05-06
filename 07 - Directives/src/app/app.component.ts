import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';
import { Permission } from './auth/auth.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective],
})
export class AppComponent {
  private authService = inject(AuthService);
  public authUser: Permission = 'admin';
  public stdUser: Permission = 'user';
  public guestUser: Permission = 'guest';

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
