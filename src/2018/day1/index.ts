import { readFileSync } from 'fs'
import path from 'path'

import { runSolution } from '../lib'
import problem1 from './problem1'
import problem2 from './problem2'

const filePath: string = path.join(__dirname, 'input.txt')

export const p1 = problem1
export const p2 = problem2
export const defaultInput: string = readFileSync(filePath, {
  encoding: 'UTF-8',
})

if (module === require.main) {
  let input = process.argv.slice(2)
  if (input.length === 0) {
    input = Array.isArray(defaultInput) ? defaultInput : [defaultInput]
  }

  runSolution('Problem 1', problem1, input)
  runSolution('Problem 2', problem2, input)
}
