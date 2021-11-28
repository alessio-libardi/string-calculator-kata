import { add } from './add'

describe('add function', () => {
  it('should be defined', () => {
    expect(add).toBeDefined()
  })

  it('should accept an empty string and return a default value', () => {
    expect(add('')).toBe(0)
  })

  it('should accept a single number and return it', () => {
    expect(add('1')).toBe(1)
  })

  it('should accept two numbers and return their sum', () => {
    expect(add('1,2')).toBe(3)
  })
})
