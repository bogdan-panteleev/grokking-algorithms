import { binarySearch } from './binary-search';
import random from 'random';
import { selectionSort } from './selection-sort';
import { recursiveSum } from './recursive-sum';
import { counter, quickSort } from './quick-sort';
import { createGraph } from './Graph';
import { breadthFirstSearch, graphSource } from './breadth-first-search';
import {
  dijkstrasAlgorithm,
  graphSource as dijkstraGraphSource,
} from './dijkstras-algorithm';

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

function testSelectionSort() {
  const arr = Array.from({ length: 10 }, () => random.int(1, 100));
  const sorted = selectionSort(arr);

  console.log(`Initial: ${arr}`);
  console.log(`Sorted: ${sorted}`);
}

function testQuickSort() {
  const arr = Array.from({ length: 10 }, () => random.int(1, 100));
  const sorted = quickSort(arr);

  console.log('Initial arr: ', arr);
  console.log('Sorted by QuickSort: ', sorted);
  console.log('Steps: ', counter);
}

function testBreadthSearch() {
  const graph = createGraph(graphSource, 'book');
  const path = breadthFirstSearch(graph, 'piano');
  console.log(path);
}

function testDijkstrasAlgorithm() {
  const graph = createGraph(dijkstraGraphSource, 'book');
  const result = dijkstrasAlgorithm(graph, 'drums');
  console.log(result);
}

// testBinarySearch();
// testSelectionSort();
// console.log('Recursive sum: ', recursiveSum([1, 2, 3, 4, 6]));
// testQuickSort();
// testBreadthSearch();

testDijkstrasAlgorithm();
