import { add as sum, map, pipe, reduce } from 'ramda'

const DELIMITER_PATTERN = /,|\n/

function add(numbers) {
  const mapToNumber = map(Number)
  const reduceToSum = reduce(sum, 0)

  return pipe(mapToNumber, reduceToSum)(numbers.split(DELIMITER_PATTERN))
}

export { add }
