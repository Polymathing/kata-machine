export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;

<<<<<<< HEAD
    while (l < h) {
=======
    while(l < h) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        const m = Math.floor(l + ((h - l) / 2));
        const v = haystack[m];

        if (v === needle) {
            return true;
        }

        if (v > needle) {
            h = m;
        } else {
            l = m + 1;
        }
    }

    return false;
}