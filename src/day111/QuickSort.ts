export default function quick_sort(arr: number[]): void {
<<<<<<< HEAD
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number): void {
=======
    qs(arr, 0, arr.length -1);
}

function qs(arr: number[], low: number, high: number) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    if (low < high) {
        const pivot = partition(arr, low, high);
        qs(arr, low, pivot - 1);
        qs(arr, pivot + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivotIndex = arr[high];
    let i = low - 1;

    for(let j = low; j < high; ++j) {
        if (arr[j] < pivotIndex) {
            ++i;
            swap(arr, i, j);
        }
    }

    ++i;
    swap(arr, i, high);
    return i;
}

<<<<<<< HEAD
function swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
=======
function swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
}