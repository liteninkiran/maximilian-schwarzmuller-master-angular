import { Component } from '@angular/core';
import {
  DashboardItemComponent,
  Image,
} from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
  imports: [DashboardItemComponent],
})
export class ServerStatusComponent {
  currentStatus = 'online';
  image: Image = {
    src: 'status.png',
    alt: 'A signal symbol',
  };
}
