import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number): string {
    const val = typeof value === 'string' ? parseFloat(value) : value;
    const tempF = (val * 9) / 5 + 32;
    return `${val.toFixed(1)}°C`;
  }
}
