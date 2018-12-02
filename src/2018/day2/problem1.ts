export default (input: string): number => {
  let two: number = 0
  let three: number = 0
  const boxes: string[] = input.trim().split('\n')

  boxes.forEach((box: string) => {
    const counts: object = box.split('').reduce((acc: any, char: string) => {
      acc[char] = (acc[char] || 0) + 1
      return acc
    }, {})

    if (Object.values(counts).some((count: number) => count === 2)) {
      two += 1
    }
    if (Object.values(counts).some((count: number) => count === 3)) {
      three += 1
    }
  })

  return two * three
}
