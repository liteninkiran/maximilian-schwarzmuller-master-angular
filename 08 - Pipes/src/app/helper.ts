type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;
type ComparatorFn = Comparator<string | number | boolean>;

export const sortAscFn: ComparatorFn = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
export const sortDesFn: ComparatorFn = (a, b) => (a === b ? 0 : a > b ? -1 : 1);
