export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

<<<<<<< HEAD
    for(;i < breaks.length; i += jumpAmount) {
=======
    for(; i < breaks.length; i += jumpAmount) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        if (breaks[i]) {
            i -= jumpAmount;
            break;
        }
    }

    for(let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}