export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    while (start < end) {
        let middle = Math.floor(start + ((end - start) / 2));
        let value = haystack[middle];

        if (value === needle) {
            return true;
        }

        if (value < needle) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return false;
}