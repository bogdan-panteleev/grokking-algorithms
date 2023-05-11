export function recursiveSum(arr: number[]) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return 0;

  return arr[0] + recursiveSum(arr.slice(1));
}
