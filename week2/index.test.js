// Import the functions to test
const { addNumbers, setAlarm } = require('./index')

// write tests here

describe('addNumbers', () => {
  test('adds two positive numbers', () => {
    // act: call the function
    let result = addNumbers(1,1)
    // assert: check expectation with matchers
    expect(result).toBe(2)
  }),
  test('adds two other positive numbers', () => {
    let result = addNumbers(10,20)
    expect(result).toBe(30)
  })
  test('adds a negative and positive number', () => {
    let result = addNumbers(-1, 2)
    expect(result).toBe(1)
  })
  // TDD: test driven development: write the test first,and then the code!
  test('does not do addition if the first parameter is a string', () => {
    let result = addNumbers('a', 1)
    expect(result).toBe('parameters must be numbers')
  })
  test('does not do addition if the second parameter is a string', () => {
    let result = addNumbers(1, 'a')
    expect(result).toBe('parameters must be numbers')
  })
})

describe('setAlarm', () => {
  test('returns true when employed true and vacation is false', () => {
    let result = setAlarm(true, false)
    expect(result).toBe(true)
  })
  test('returns false when employed true and vacation is true', () => {
    let result = setAlarm(true, true)
    expect(result).toBe(false)
  })
  test('returns false when employed false and vacation is true', () => {
    let result = setAlarm(false, true)
    expect(result).toBe(false)
  })
  test('returns false when employed false and vacation is false', () => {
    let result = setAlarm(false, false)
    expect(result).toBe(false)
  })
})