import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("quick-sort: empty array", function () {
    const arr: number[] = [];
    quick_sort(arr);
    expect(arr).toEqual([]);
});

test("quick-sort: single element array", function () {
    const arr = [5];
    quick_sort(arr);
    expect(arr).toEqual([5]);
});

test("quick-sort: already sorted array", function () {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    quick_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("quick-sort: reversed array", function () {
    const arr = [9, 7, 4, 3, 2, 1];
    quick_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 7, 9]);
});

test("quick-sort: array with negative and positive numbers", function () {
    const arr = [5, -1, 0, 3, -7, 2];
    quick_sort(arr);
    expect(arr).toEqual([-7, -1, 0, 2, 3, 5]);
});

test("quick-sort: array with all equal elements", function () {
    const arr = [4, 4, 4, 4, 4];
    quick_sort(arr);
    expect(arr).toEqual([4, 4, 4, 4, 4]);
});

test("quick-sort: large array", function () {
    const arr = Array.from({ length: 100 }, (_, i) => 100 - i);
    quick_sort(arr);
    expect(arr).toEqual(Array.from({ length: 100 }, (_, i) => i + 1));
});

test("quick-sort: array with large numbers", function () {
    const arr = [999999999, 333333333, 777777777];
    quick_sort(arr);
    expect(arr).toEqual([333333333, 777777777, 999999999]);
});

test("quick-sort: array with duplicates", function () {
    const arr = [3, 1, 2, 3, 1, 3];
    quick_sort(arr);
    expect(arr).toEqual([1, 1, 2, 3, 3, 3]);
});