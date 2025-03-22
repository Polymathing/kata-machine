export default function bs_list(haystack: number[], needle: number): boolean {
    let lowest = 0;
    let highest = haystack.length; 

    for (; lowest < highest;) {
        let mid = Math.floor(lowest + ((highest - lowest) / 2));
        let value = haystack[mid];

        if (needle === value) {
            return true;
        }

        if (needle > value) {
            lowest = mid + 1;
        } else {
            highest = mid;
        }
    }

    return false;
}