import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  contentChild,
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
export class ControlComponent implements AfterContentInit, OnInit {
  label = input.required<string>();
  // private control = contentChild.required<InputRef>('input');
  @ContentChild('input') private control?: InputRef;

  constructor() {
    // afterRender(() => {
    //   console.log('After Render');
    // });
    // afterNextRender(() => {
    //   console.log('After Next Render');
    // });
  }

  onClick() {
    console.log(this.control);
  }

  ngOnInit() {
    // console.log('On Init', this.control);
  }

  ngAfterContentInit() {
    // console.log('After Content Init', this.control);
  }
}
