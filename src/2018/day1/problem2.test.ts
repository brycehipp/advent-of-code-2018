import { defaultInput, p2 } from '.'

test('Provided test cases', () => {
  expect(p2('+1\n-1')).toBe(0)
  expect(p2('+3\n+3\n+4\n-2\n-4')).toBe(10)
  expect(p2('-6\n+3\n+8\n+5\n-6')).toBe(5)
  expect(p2('+7\n+7\n-2\n-7\n-4')).toBe(14)
})

test('Puzzle input', () => {
  expect(p2(defaultInput)).toBe(77271)
})
