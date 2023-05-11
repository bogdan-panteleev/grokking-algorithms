export let counter = 0;
export function quickSort(arr: number[]): number[] {
  counter++;
  if (arr.length < 2) {
    return arr;
  }
  const midIndex = Math.floor((arr.length - 1) / 2);
  const base = arr[midIndex];
  const less = arr.filter((number) => number < base);
  const greater = arr.filter((number) => number > base);

  return quickSort(less).concat(base).concat(quickSort(greater));
}
