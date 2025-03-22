export default function linear_search(haystack: number[], needle: number): boolean {
    for(let i = haystack.length; i >= 0; --i) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false;
}