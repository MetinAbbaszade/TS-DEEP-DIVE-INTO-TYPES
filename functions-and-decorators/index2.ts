export default function sumWithOptionalDivision(
  numbers: number[],
  divisor?: number
): number {
  const sum = numbers.reduce((acc, element) => acc + element, 0);

  return divisor ? sum / divisor : sum;
}