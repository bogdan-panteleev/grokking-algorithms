export function binarySearch<T>(value: T, array: T[]): number | null {
  let startPointer = 0;
  let endPointer = array.length - 1;
  let counter = 0;

  while (startPointer <= endPointer) {
    counter++;
    const center = Math.floor((endPointer - startPointer) / 2);
    const valuePointer = startPointer + center;
    if (array[valuePointer] < value) {
      startPointer = valuePointer + 1;
    } else if (array[valuePointer] > value) {
      endPointer = valuePointer - 1;
    } else {
      console.log('Steps: ', counter);
      return valuePointer;
    }
  }

  console.log('Steps: ', counter);
  return null;
}
