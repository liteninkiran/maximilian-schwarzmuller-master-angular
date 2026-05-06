import { Component, model } from '@angular/core';

export type Size = {
  width: string;
  height: string;
};

export const RECT_SIZE: Size = {
  width: '200',
  height: '100',
};

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
  standalone: true,
  imports: [],
})
export class RectComponent {
  size = model.required<Size>();

  onReset() {
    this.size.set(RECT_SIZE);
  }
}
