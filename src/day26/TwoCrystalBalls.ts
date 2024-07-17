export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    do {
        if (breaks[i]) {
            break;
        }
        i += jumpAmount;
    } while (i < breaks.length);

    i -= jumpAmount;

    let j = 0;
    do {
        if (breaks[i]) {
            return i;
        }

        ++i;
        ++j;
    } while(j <= jumpAmount && i < breaks.length);

    return -1;
}