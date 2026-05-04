import {
  Component,
  ContentChild,
  ElementRef,
  input,
  OnInit,
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
export class ControlComponent implements OnInit {
  label = input.required<string>();
  // private control = contentChild.required<InputRef>('input');
  @ContentChild('input') private control?: InputRef;

  constructor() {}

  onClick() {}

  ngOnInit() {}
}
