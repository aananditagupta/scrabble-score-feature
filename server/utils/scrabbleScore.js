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

function calculateScrabbleScore(word) {
  // Validate input: Check if the input 'word' is a valid string containing only letters
  if (!word || typeof word !== "string" || !/^[a-zA-Z]+$/.test(word)) {
    return {
      error:
        // Return error message for invalid input and caters for edge case (2) mentioned in the test
        "Invalid input. Please provide a valid word containing only letters.",
    };
  }

  let score = 0;
  // Convert the word to uppercase to match keys in letterScores - this is also to cater for edge case (1) mentioned in the test
  const upperCaseWord = word.toUpperCase();

  // Calculate the Scrabble score
  for (let letter of upperCaseWord) {
    score += letterScores[letter] || 0; // Add the score for each letter; if the letter is not found, add 0
  }

  return { score }; // Return the final calculated score
}

module.exports = calculateScrabbleScore; // Export the function for use in other modules
