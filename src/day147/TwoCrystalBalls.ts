export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for(; i < breaks.length; i += jumpAmount) {
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