export default function bubble_sort(arr: number[]): void {
    for(let i = 0; i < arr.length - 1; ++i) {
<<<<<<< HEAD
        for(let j = 0; j < arr.length - 1 - i; ++j) {
=======
        for(let j = 0; j < arr.length -1 - i; ++j) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}