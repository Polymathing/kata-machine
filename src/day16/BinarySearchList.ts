export default function bs_list(haystack: number[], needle: number): boolean {
    let h = haystack.length;
    let l = 0;

    while (h > l) {
        let m = Math.floor(l + (h - l) / 2);
        let v = haystack[m];
        
        if (v === needle) return true;
        if (v > needle) {
            h = m;
        } else {
            l = m + 1;
        }
    }

    return false;
}