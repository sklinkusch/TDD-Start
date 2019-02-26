const { sum, reduceNumbers, addGlobalVar, mapArray } = require("./tdd");

describe("Tests for sum funtion", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("test various edge cases", () => {
    expect(sum(5, 2)).toBe(7);
    expect(sum(-8, 2)).toBe(-6);
    expect(sum(200, -400)).toBe(-200);
  });
});

describe("Reduces an Array containing numbers to one value", () => {
  test("Retuns number if length === 1", () => {
    expect(reduceNumbers([1])).toEqual(1);
    const hello = { test: "Yeah" };
    const hello1 = { test: "Yeah" };
    expect(hello).toEqual(hello1);
  });

  test("should return sum of an array when length > 1", () => {
    expect(reduceNumbers([1, 2])).toEqual(3);
  });

  test("should handle negative numbers well", () => {
    expect(reduceNumbers([-1, -5, -10])).toEqual(-16);
  });

  test("should throw an error if no parameter provided", () => {
    expect(reduceNumbers()).toBeInstanceOf(Error);
    const error = reduceNumbers();
    expect(error.message).toEqual("Got no parameter...");
  });

  test("Add global vars", () => {
    const testRun = addGlobalVar({ addedValue: true });
    expect(testRun).toBe(window);
    expect(window.addedValue).toEqual(true);
  });
});

describe("Check a map function", () => {
  test("Check if it is returning an array", () => {
    const result = mapArray([1, 2, 3]);
    expect(Array.isArray(result)).toEqual(true);
  });
  test("Check if the input and output arrays have the same length", () => {
    const example = [1, 2, 3];
    const result = mapArray(example);
    expect(result.length).toEqual(example.length);
  });
  test("Check if the result is right", () => {
    expect(mapArray([1, 2, 3])).toEqual([2, 4, 6]);
    expect(mapArray([2, 4, 7])).toEqual([4, 8, 14]);
    expect(mapArray([-6, 0, 1479])).toEqual([-12, 0, 2958]);
  });
  test("Check if it works with bigger arrays", () => {
    expect(
      mapArray([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ])
    ).toEqual([
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
      32,
      34,
      36,
      38,
      40
    ]);
  });
});
