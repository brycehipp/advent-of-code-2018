import { defaultInput, p2 } from '.'

test('Provided test cases', () => {
  const testData = `
abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
  `
  expect(p2(testData)).toBe('fgij')
})

test('Puzzle input', () => {
  expect(p2(defaultInput)).toBe('mphcuasvrnjzzkbgdtqeoylva')
})
