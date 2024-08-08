export default function linear_search(haystack: number[], needle: number): boolean {
    let i = 0;
    do {
        if (haystack[i] === needle) return true;
        ++i;
    } while(i < haystack.length);
    return false;
}