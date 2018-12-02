import { readFile as _readFile } from 'fs'
import { promisify } from 'util'

// Convert fs.readFile into Promise version of same
export const readFile = promisify(_readFile)

export default {
  readFile,
}
