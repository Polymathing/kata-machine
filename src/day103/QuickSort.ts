function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < pivot; ++j) {
        if (arr[j] < arr[high]) {
            ++i;
            swap(arr, j, i);
        }
    }

    ++i;
    swap(arr, i, high);
    return i;
}

function qs(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        qs(arr, low, pivotIndex -1);
        qs(arr, pivotIndex + 1, high);
    }
};


export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function swap(arr: number[], x: number, y: number) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}