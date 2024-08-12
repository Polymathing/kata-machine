export default function bubble_sort(arr: number[]): void {
    let i = 0;
    do {
        let j = 0;
        do {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            ++j;
        } while (j < arr.length - 1 - i);
        ++i;
    } while (i < arr.length - 1)
}