import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  public userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContRef.clear();
      }
    });
  }
}
