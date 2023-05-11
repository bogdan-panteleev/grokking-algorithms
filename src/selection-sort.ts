export function selectionSort(arr: number[]) {
  const newArr: number[] = [];
  const copy = [...arr];

  while (copy.length) {
    const smallestIndex = copy.reduce(
      (smallestIndex, current, currentIndex, array) =>
        current < array[smallestIndex] ? currentIndex : smallestIndex,
      0,
    );

    newArr.push(copy[smallestIndex]);
    copy.splice(smallestIndex, 1);
  }

  return newArr;
}
