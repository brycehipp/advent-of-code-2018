function findMatches(boxes: string[], box: string): string[] {
  const matches: string[] = []
  boxes.forEach((b: string) => {
    let diffCount = 0
    if (box !== b) {
      const boxLetters: string[] = box.split('')
      const currentBoxLetters: string[] = b.split('')
      for (let i: number = 0; i < boxLetters.length; i += 1) {
        diffCount +=
          i < currentBoxLetters.length && boxLetters[i] !== currentBoxLetters[i]
            ? 1
            : 0
      }
      if (diffCount === 1) {
        matches.push(box, b)
      }
    }
  })
  return matches
}

function getChecksum(box1: string, box2: string): string {
  const b1Letters: string[] = box1.split('')
  const b2Letters: string[] = box2.split('')
  const checksum: string[] = []

  for (let i = 0; i < b1Letters.length; i += 1) {
    if (b1Letters[i] === b2Letters[i]) {
      checksum.push(b1Letters[i])
    }
  }

  return checksum.join('')
}

export default (input: string): string => {
  let checksum: string = ''
  const boxes: string[] = input.trim().split('\n')

  for (const box of boxes) {
    const matches = findMatches(boxes, box)

    if (matches.length) {
      checksum = getChecksum(matches[0], matches[1])
      break
    }
  }

  return checksum
}
