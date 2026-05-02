import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [],
})
export class ControlComponent {
  label = input.required<string>();
}
