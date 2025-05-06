export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}

function qs(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pi = partition(arr, low, high);
        qs(arr, low, pi -1);
        qs(arr, pi + 1, high);
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
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}