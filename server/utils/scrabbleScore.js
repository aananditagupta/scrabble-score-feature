// Object mapping each letter to its corresponding Scrabble score
const letterScores = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

// Validates the input word, ensuring it's a non-empty string of letters
function validateWord(word) {
  if (typeof word !== "string") {
    return "Invalid input type. Please provide a word as a string.";
  }

  word = word.trim(); // Remove leading and trailing whitespace

  if (!word || !/^[a-zA-Z]+$/.test(word)) {
    return "Invalid input. Please provide a non-empty word containing only letters.";
  }

  return null; // No validation errors
}

// Calculates the Scrabble score for a valid word
function calculateScrabbleScore(word) {
  const validationError = validateWord(word);
  if (validationError) {
    return { error: validationError }; // Return error if input validation fails
  }

  // Calculate score using the letterScores mapping
  const score = [...word.toUpperCase()].reduce(
    (total, letter) => total + (letterScores[letter] || 0),
    0
  );

  return { score }; // Return the calculated score
}

module.exports = calculateScrabbleScore;
