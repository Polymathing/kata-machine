export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    while (start < end) {
        let mid = Math.floor(start + ((end - start) / 2));
        let val = haystack[mid];

        if (needle === val) return true;
        if (needle > val) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return false;
}