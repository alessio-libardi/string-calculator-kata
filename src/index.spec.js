const add = require('.')

describe('String calculator function', function () {
  describe('Step 1: the simplest thing', function () {
    it('accept an empty string', function () {
      const actual = add('')
      const expected = ''

      expect(actual).toBe(expected)
    })

    it.todo('accept a string with one number')

    it.todo('accept a string with two numbers')
  })
})
