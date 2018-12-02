import { readFileSync } from 'fs'
import path from 'path'

import { fsOptions, runSolution } from '../lib'
import problem1 from './problem1'
import problem2 from './problem2'

const filePath: string = path.join(__dirname, 'input.txt')

export const p1 = problem1
export const p2 = problem2
export const defaultInput: string = readFileSync(filePath, fsOptions)

if (module === require.main) {
  let input: string[] = process.argv.slice(2)
  if (!input.length) {
    input = Array.isArray(defaultInput) ? defaultInput : [defaultInput]
  }

  runSolution('Problem 1', problem1, input)
  runSolution('Problem 2', problem2, input)
}
