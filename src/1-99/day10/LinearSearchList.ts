export default function linear_search(haystack: number[], needle: number): boolean {
    if (!haystack.length) return false;
    if (haystack.length === 1) return needle === haystack[0];

    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) return true;
    }

    return false;
}