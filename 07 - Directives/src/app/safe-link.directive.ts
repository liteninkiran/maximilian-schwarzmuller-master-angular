import { Directive, ElementRef, inject, input } from '@angular/core';

type AnchorRef = ElementRef<HTMLAnchorElement>;

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  public queryParam = input('myApp');
  private hostElementRef = inject<AnchorRef>(ElementRef);

  constructor() {}

  onConfirmLeavePage(event: MouseEvent) {
    const response = window.confirm('Do you want to leave the app?');
    if (response) {
      const target = this.hostElementRef.nativeElement;
      const address = target.href;
      target.href = `${address}?from=${this.queryParam()}`;
      return;
    }

    event.preventDefault();
  }
}
