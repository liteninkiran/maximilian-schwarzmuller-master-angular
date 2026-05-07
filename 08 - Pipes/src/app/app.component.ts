import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, TemperaturePipe],
})
export class AppComponent {
  numberPipeFormat = '1.1-2';
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.700456,
    chicago: 65.50375238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}
