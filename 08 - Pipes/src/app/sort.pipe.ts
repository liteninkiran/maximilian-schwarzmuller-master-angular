import { Pipe, PipeTransform } from '@angular/core';
import { sortAscFn, sortDesFn } from './helper';

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
      direction === 'asc' ? sortAscFn(a, b) : sortDesFn(a, b);
    sorted.sort(sortFn);
    return sorted;
  }
}
