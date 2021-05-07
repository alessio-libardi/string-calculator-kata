function add(numbers) {
  if (numbers === '') {
    return numbers
  }

  return numbers
    .split(',')
    .map((n) => parseInt(n))
    .reduce((acc, curr) => acc + curr, 0)
}

module.exports = add
