export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - 1 -i; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
            }
        }
    }
}

function swap(arr: number[], index: number) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
}