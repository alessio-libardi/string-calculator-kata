const DEFAULT_DELIMITER = ','
const NEW_LINES_DELIMITER = /[\n]+/

function add(numbers) {
  const isEmpty = numbers === ''
  if (isEmpty) {
    return numbers
  }

  numbers = numbers.replace(NEW_LINES_DELIMITER, DEFAULT_DELIMITER)

  const matches = numbers.split(DEFAULT_DELIMITER)
  const integers = matches.map((n) => parseInt(n))
  return integers.reduce((acc, curr) => acc + curr, 0)
}

module.exports = add
