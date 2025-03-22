export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    while (start < end) {
        let m = Math.floor(start + ((end - start) / 2));
        let v = haystack[m];

        if (needle === v) {
            return true;
        }

        if (v > needle) {
            end = m;
        } else {
            start = m + 1;
        }
    }

    return false;
}