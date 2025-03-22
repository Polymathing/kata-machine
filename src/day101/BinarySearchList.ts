export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;
    while (l < h) {
        const m = Math.floor(l + ((h - l) / 2));
        const v = haystack[m];
        if (v === needle) {
            return true;
        }

        if (v < needle) {
            l = m + 1;
        } else {
            h = m;
        }
    }

    return false;
}