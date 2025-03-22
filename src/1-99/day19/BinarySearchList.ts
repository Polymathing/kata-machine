export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    while (start < end) {
        let m = Math.floor(start + ((end - start) / 2));
        let v = haystack[m];

        if (v === needle) {
            return true;
        }

        v > needle ? end = m : start = m + 1;
    }

    return false;
}