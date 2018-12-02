export default (input: string) => {
  const changes: number[] = input
    .trim()
    .split('\n')
    .map(Number)

  const seen: Set<number> = new Set()
  let freq: number = 0

  while (true) {
    for (const change of changes) {
      seen.add(freq)
      freq += change
      if (seen.has(freq)) {
        return freq
      }
    }
  }
}
