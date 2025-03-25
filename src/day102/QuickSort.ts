function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            ++i;
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    ++i;
    const temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;

    return i;
}

function qs(arr: number[], low: number, high: number) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        qs(arr, low, pivotIndex - 1);
        qs(arr, pivotIndex + 1, high);
    }
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}