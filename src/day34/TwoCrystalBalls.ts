export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount  = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
     
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) break;
    }

    i -= jumpAmount;
    let j = 0;
    do {
        if (breaks[i]) {
            return i;
        }

        ++j;
        ++i;
    } while (j <= jumpAmount && i < breaks.length);

    return -1;
}