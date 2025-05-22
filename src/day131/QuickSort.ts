export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pi = partition(arr, low, high);
        qs(arr, pi + 1, high);
        qs(arr, low, pi - 1);
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = (low - 1);

    for(let j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            ++i;
            swap(arr, i, j);
        }
    }

    ++i;
    swap(arr, i, high);
    return i;
}

function swap(arr: number[], i: number, j: number): void {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}