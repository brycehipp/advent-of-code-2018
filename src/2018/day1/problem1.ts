const initialFreq: number = 0

export default (input: string): number => {
  const frequencies: string[] = input.trim().split('\n')

  const freq: number = frequencies
    .map(f => Number(f))
    .reduce((a: number, b: number) => a + b, initialFreq)

  return freq
}
