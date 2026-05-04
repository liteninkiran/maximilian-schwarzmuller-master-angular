import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

type Status = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<Status>('offline');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      const tasks = signal([{ id: 1 }, { id: 2 }]);
      const timer = setTimeout(() => {
        console.log(`Current number of tasks: ${tasks().length}`);
      }, 1000);
      onCleanup(() => {
        clearTimeout(timer);
      });
    });
  }

  ngOnInit() {
    this.setChangeStatus();
  }

  private setChangeStatus() {
    const changeFn = () => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    };
    const interval = setInterval(changeFn, 5000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }
}
