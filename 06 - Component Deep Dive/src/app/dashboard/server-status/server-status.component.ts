import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

type Status = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: Status = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    this.setChangeStatus();
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

  private setChangeStatus() {
    const changeFn = () => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    };
    this.interval = setInterval(changeFn, 5000);
  }
}
