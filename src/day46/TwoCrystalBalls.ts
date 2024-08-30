export default function two_crystal_balls(breaks: boolean[]): number {
    const jumAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumAmount;

    while (i < breaks.length) {
        if (breaks[i]) {
            break;
        }

        i += jumAmount;
    }

    i -= jumAmount;

    let j = 0;
    
    while (j <= jumAmount && i < breaks.length) {
        if (breaks[i]) {
            return i;
        }

        j++;
        i++;
    }

    return -1;
}