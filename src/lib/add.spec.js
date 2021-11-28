import { add } from './add'

describe('add function', () => {
  it('should be defined', () => {
    expect(add).toBeDefined()
  })

  it('should accept an empty string', () => {
    expect(add('')).toBe(0)
  })

  it('should accept a single number', () => {
    expect(add('1')).toBe(1)
  })

  it('should accept two numbers', () => {
    expect(add('1,2')).toBe(3)
  })

  it('should handle an unknown amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15)
  })

  it('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6)
  })
})
