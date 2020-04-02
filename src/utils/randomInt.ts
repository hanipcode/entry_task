export default function randomInt(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
