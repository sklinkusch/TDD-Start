const { sum, reduceNumbers, addGlobalVar } = require("./tdd")

describe("Tests for sum funtion", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
  })
  test("test various edge cases", () => {
    expect(sum(5, 2)).toBe(7)
    expect(sum(-8, 2)).toBe(-6)
    expect(sum(200, -400)).toBe(-200)
  })
})

describe("Reduces an Array containing numbers to one value", () => {
  test("Retuns number if length === 1", () => {
    expect(reduceNumbers([1])).toEqual(1)
    const hello = { test: "Yeah" }
    const hello1 = { test: "Yeah" }
    expect(hello).toEqual(hello1)
  })

  test("should return sum of an array when length > 1", () => {
    expect(reduceNumbers([1, 2])).toEqual(3)
  })

  test("should handle negative numbers well", () => {
    expect(reduceNumbers([-1, -5, -10])).toEqual(-16)
  })

  test("should throw an error if no parameter provided", () => {
    expect(reduceNumbers()).toBeInstanceOf(Error)
    const error = reduceNumbers()
    expect(error.message).toEqual("Got no parameter...")
  })

  test("Add global vars", () => {
    const testRun = addGlobalVar({ addedValue: true })
    expect(testRun).toBe(window)
    expect(window.addedValue).toEqual(true)
  })
})
