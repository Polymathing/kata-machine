export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
            }
        }
    }
}

function swap(arr: number[], i: number) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}