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

    it('accept a string with two numbers', function () {
      const actual = add('1,2')
      const expected = 3

      expect(actual).toBe(expected)
    })
  })

  describe('Step 2: handle an unknown amount of numbers', function () {
    it('accept an unknown amount of numbers', function () {
      const actual = add('1,2,3,4,5')
      const expected = 15

      expect(actual).toBe(expected)
    })
  })

  describe('Step 3: handle new lines between numbers', function () {
    it('accept new lines between numbers', function () {
      const actual = add('1\n2,3')
      const expected = 6

      expect(actual).toBe(expected)
    })
  })
})
