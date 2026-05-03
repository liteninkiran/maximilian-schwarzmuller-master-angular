import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';

type Status = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ServerStatusComponent implements OnInit {
  currentStatus: Status = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    this.setChangeStatus();
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
    const interval = setInterval(changeFn, 5000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }
}
