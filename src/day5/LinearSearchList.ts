export default function linear_search(haystack: number[], needle: number): boolean {
    let i: number = 0;

    while (i < haystack.length) {
        if (haystack[i] == needle) {
            return true;
        }

        ++i;
    }

    return false;
}