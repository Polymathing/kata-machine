export default function bs_list(haystack: number[], needle: number): boolean {

    let start = 0;
    let end = haystack.length;

    do {
        let middle = Math.floor(start + ( (end - start) / 2 ));

        if (needle === haystack[middle]) {
            return true;
        }

        if (needle > haystack[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }

    } while (start < end);

    return false;
}