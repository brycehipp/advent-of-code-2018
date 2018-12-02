import { defaultInput, p1 } from '.'

test('Provided test cases', () => {
  const testData = `
abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab
  `
  expect(p1(testData)).toBe(12)
})

test('Puzzle input', () => {
  expect(p1(defaultInput)).toBe(7533)
})
