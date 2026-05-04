import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chevron-icon',
  templateUrl: './chevron-icon.component.html',
  styleUrl: './chevron-icon.component.css',
  standalone: true,
  imports: [],
})
export class ChevronIconComponent {
  expand = input.required<boolean>();
}
