import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  standalone: true,
  imports: [],
})
export class ControlComponent {
  label = input.required<string>();
}
