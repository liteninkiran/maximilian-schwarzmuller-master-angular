import { Component, input } from '@angular/core';

export type Image = {
  src: string;
  alt: string;
};

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  standalone: true,
  imports: [],
})
export class DashboardItemComponent {
  image = input.required<Image>();
  title = input.required<string>();
}
