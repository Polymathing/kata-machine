export default function linear_search(haystack: number[], needle: number): boolean {
    let i = 0;

    do {
        if (needle === haystack[i]) {
            return true;
        }

        ++i;
    } while (i < haystack.length)

    return false;
}