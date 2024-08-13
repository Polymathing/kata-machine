export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;

    while (l < h) {
        const mid = Math.floor(l + ((h - l) / 2));
        const v = haystack[mid];
        if (v === needle) {
            return true;
        }

        if (v > needle) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }
    return false;
}