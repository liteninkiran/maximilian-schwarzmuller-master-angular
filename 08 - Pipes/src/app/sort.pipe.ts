import { Pipe, PipeTransform } from '@angular/core';

type InputValue = string | number;
type InputValues = string[] | number[];
type Direction = 'asc' | 'desc';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: true,
})
export class SortPipe implements PipeTransform {
  transform(value: InputValues, direction: Direction = 'asc') {
    const sorted = [...value];
    const sortFn = (a: InputValue, b: InputValue) =>
      direction === 'asc' ? (a > b ? 1 : -1) : a > b ? -1 : 1;
    sorted.sort(sortFn);
    return sorted;
  }
}
