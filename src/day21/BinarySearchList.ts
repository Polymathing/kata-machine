export default function bs_list(haystack: number[], needle: number): boolean {
    let jumpAmount = Math.floor(Math.sqrt(haystack.length));

    let i = jumpAmount;

    for(; i < haystack.length; i += jumpAmount) {
        if (haystack[i] >= needle) {
            break;
        }
    }

    i -= jumpAmount;

    for(let j = 0; j <= jumpAmount && i < haystack.length; ++j, ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false;
}