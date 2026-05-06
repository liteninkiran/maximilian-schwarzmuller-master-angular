import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myApp');

  constructor() {}

  onConfirmLeavePage(event: MouseEvent) {
    const response = window.confirm('Do you want to leave the app?');
    if (response) {
      const target = event.target as HTMLAnchorElement;
      const address = target.href;
      target.href = `${address}?from=${this.queryParam()}`;
      return;
    }

    event.preventDefault();
  }
}
