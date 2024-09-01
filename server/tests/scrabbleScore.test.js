const calculateScrabbleScore = require("../utils/scrabbleScore"); // Use require instead of import

describe("calculateScrabbleScore", () => {
  test('calculates score for valid word "cabbage"', () => {
    expect(calculateScrabbleScore("cabbage").score).toBe(14);
  });

  test("returns error for non-alphabetic characters", () => {
    expect(calculateScrabbleScore("123").error).toBe(
      "Invalid input. Please provide a non-empty word containing only letters."
    );
  });

  test("handles empty input correctly", () => {
    expect(calculateScrabbleScore("").error).toBe(
      "Invalid input. Please provide a non-empty word containing only letters."
    );
  });

  test("handles input with only whitespace", () => {
    expect(calculateScrabbleScore("   ").error).toBe(
      "Invalid input. Please provide a non-empty word containing only letters."
    );
  });

  test("returns error for non-string input", () => {
    expect(calculateScrabbleScore(null).error).toBe(
      "Invalid input type. Please provide a word as a string."
    );
  });

  test("is case insensitive", () => {
    expect(calculateScrabbleScore("CABBAGE").score).toBe(14);
    expect(calculateScrabbleScore("CaBbAgE").score).toBe(14);
  });
});
