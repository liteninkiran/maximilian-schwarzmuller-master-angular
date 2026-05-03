import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
  standalone: true,
  imports: [],
})
export class ControlComponent {
  label = input.required<string>();
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick2() {
  //   this.onClick();
  // }

  onClick() {
    console.log('Clicked');
  }
}
