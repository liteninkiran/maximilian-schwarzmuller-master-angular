import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    return `${value} - TRANSFORMED`;
  }
}
