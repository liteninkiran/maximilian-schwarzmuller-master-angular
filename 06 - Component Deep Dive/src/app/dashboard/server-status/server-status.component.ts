import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Status = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ServerStatusComponent {
  currentStatus: Status = 'online';

  constructor() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
