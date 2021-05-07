function add(numbers) {
  const isEmpty = numbers === ''
  if (isEmpty) {
    return numbers
  }

  const integers = numbers.split(',').map((n) => parseInt(n))

  return integers.reduce((acc, curr) => acc + curr, 0)
}

module.exports = add
