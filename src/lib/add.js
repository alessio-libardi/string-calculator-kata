import { add as sum, map, pipe, reduce } from 'ramda'

function add(numbers) {
  const mapToNumber = map(Number)
  const reduceToSum = reduce(sum, 0)

  return pipe(mapToNumber, reduceToSum)(numbers.split(','))
}

export { add }
