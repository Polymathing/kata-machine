export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    while (i < breaks.length) {
        if(breaks[i]) {
            break;
        }
        i += jumpAmount;
    }

    i -= jumpAmount;

    let j = 0;

    while (j <= jumpAmount && i < breaks.length) {
        if (breaks[i]) {
            return i;
        }
        ++j;
        ++i;
    }

    return -1;
}