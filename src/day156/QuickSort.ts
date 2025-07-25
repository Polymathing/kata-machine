export default function quick_sort(arr: number[]): void {
  qs(0, arr.length -1, arr);
}

function qs(low: number, high: number, arr: number[]): void {
  if (low < high) {
    const pi = partition(low, high, arr);
    qs(low, pi -1, arr);
    qs(pi + 1, high, arr);
  }
}

function partition(low: number, high: number, arr: number[]): number {
  const pivot = arr[high];
  let i = (low - 1);

  for(let j = low; j < high; ++j) {
    if (arr[j] < pivot) {
      ++i;
      swap(i, j, arr);
    }
  }

  ++i;
  swap(i, high, arr);
  return i;
}

function swap(low: number, high: number, arr: number[]): void {
  const temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
}