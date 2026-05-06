import { Component } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RectComponent, FormsModule],
})
export class AppComponent {
  rectSize = {
    width: '500',
    height: '600',
  };
}
