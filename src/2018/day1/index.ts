import { readFileSync } from 'fs'
import path from 'path'

const filePath: string = path.join(__dirname, 'input.txt')

export { default as problem1 } from './problem1'
export { default as problem2 } from './problem2'
export const defaultInput: string = readFileSync(filePath, {
  encoding: 'UTF-8',
})
