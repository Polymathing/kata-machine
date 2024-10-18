export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = 0;

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

        ++j;
        ++i;
    } while (j <= jumpAmount && i < breaks.length);


    return -1;
}