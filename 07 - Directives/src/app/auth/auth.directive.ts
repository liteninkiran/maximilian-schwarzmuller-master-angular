import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  public userType = input.required<Permission>();
  private authService = inject(AuthService);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('Show element');
      } else {
        console.log('Hide element');
      }
    });
  }
}
