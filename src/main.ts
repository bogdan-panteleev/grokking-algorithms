import { binarySearch } from './binary-search';
import random from 'random';

function testBinarySearch(): void {
  const numbers = Array.from({ length: 8 }, () => random.int(1, 100)).sort(
    (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    },
  );

  const position = binarySearch(numbers[7], numbers);

  if (position === null) {
    console.log('Value not found');
  } else {
    console.log(`Position: ${position}, value: ${numbers[position]}`);
  }
}

testBinarySearch();
