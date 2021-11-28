import { add } from './add'

describe('add function', () => {
  it('should be defined', () => {
    expect(add).toBeDefined()
  })

  it('should accept an empty string and return a default value', () => {
    expect(add('')).toBe(0)
  })
})
