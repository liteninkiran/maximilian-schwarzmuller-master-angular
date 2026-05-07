import { Pipe, PipeTransform } from '@angular/core';

export type TempScale = 'c' | 'f';
type ConversionKey = `${TempScale}:${TempScale}`;
type ConversionFn = (value: number) => number;
type Converters = Record<ConversionKey, ConversionFn>;

const converters: Converters = {
  'c:f': (v) => (v * 9) / 5 + 32,
  'f:c': (v) => ((v - 32) * 5) / 9,
  'c:c': (v) => v,
  'f:f': (v) => v,
};

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputScale: TempScale = 'c',
    outputScale: TempScale = 'c',
  ): string {
    // These are are equivalent:
    //   value == null
    //   value === null || value === undefined
    if (value == null || value === '') {
      return '';
    }

    const isNum = typeof value === 'number';
    const numberVal = isNum ? value : Number.parseFloat(value);

    if (Number.isNaN(numberVal)) {
      return '';
    }

    const converter = converters[`${inputScale}:${outputScale}`];
    const result = converter(numberVal);

    return `${result.toFixed(1)} °${outputScale.toUpperCase()}`;
  }
}
