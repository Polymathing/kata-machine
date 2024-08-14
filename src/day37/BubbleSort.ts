export default function bubble_sort(arr: number[]): void {
    let i = 0;
    while ( i < arr.length -1) {
        let j = 0;
        while (j < arr.length - 1 - i) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
            }

            ++j;
        }

        ++i;
    }
}

function swap(arr: number[], i: number) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}