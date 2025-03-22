export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = haystack.length; i >= 0; --i) {
        if (needle === haystack[i]) {
            return true;
        }
    }

    return false;
}