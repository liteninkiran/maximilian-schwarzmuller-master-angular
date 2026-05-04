import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputRef = ElementRef<InputElement>;

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
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: InputRef;
  private control = contentChild.required<InputRef>('input');

  onClick() {
    // console.log(this.el);
    console.log(this.control());
  }
}
