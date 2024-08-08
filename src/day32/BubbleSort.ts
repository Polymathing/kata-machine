export default function bubble_sort(arr: number[]): void {
    let i = 0;
    while (i < arr.length -1) {
        let j = 0;
        while (j < arr.length -1 - i) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            ++j;
        }
        ++i;
    }
}