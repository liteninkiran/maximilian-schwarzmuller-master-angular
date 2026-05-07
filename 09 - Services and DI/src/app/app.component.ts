import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TasksComponent],
})
export class AppComponent {}
