export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    for(; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    let j = 0;
    while(j <= jumpAmount && i < breaks.length) {
        if (breaks[i]) {
            return i;
        }

        ++i;
        ++j;
    }

    return -1;
}