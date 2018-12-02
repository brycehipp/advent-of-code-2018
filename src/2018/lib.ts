export const runSolution = (
  name: string,
  fn: (args?: any) => void,
  input: any[],
) => {
  const start = process.hrtime()
  const answer = fn(...input)
  const time = process.hrtime(start)
  console.log('------', name, '------')
  console.log('\x1b[38;5;240mAnswer:\x1b[0m', answer)
  console.log(
    '\x1b[38;5;240mTime:  \x1b[0m',
    time[0] * 1000 + time[1] / 1000000,
    'ms',
  )
  console.log('------------------------')
}

export const fsOptions = { encoding: 'UTF-8' }
