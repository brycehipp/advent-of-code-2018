import { defaultInput, problem1 } from '.'

test('Provided test cases', () => {
  expect(problem1('+1\n-2\n+3\n+1')).toBe(3)
  expect(problem1('+1\n+1\n+1')).toBe(3)
  expect(problem1('+1\n+1\n-2')).toBe(0)
  expect(problem1('-1\n-2\n-3')).toBe(-6)
})

test('Puzzle input', () => {
  expect(problem1(defaultInput)).toBe(538)
})
