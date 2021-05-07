const add = require('.')

describe('String calculator function', function () {
  describe('Step 1: the simplest thing', function () {
    it('accept an empty string', function () {
      const actual = add('')
      const expected = ''

      expect(actual).toBe(expected)
    })

    it('accept a string with one number', function () {
      const actual = add('1')
      const expected = 1

      expect(actual).toBe(expected)
    })

    it.todo('accept a string with two numbers')
  })
})
