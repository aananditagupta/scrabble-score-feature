import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(""); // State to store the current input word
  const [wordScores, setWordScores] = useState([]); // State to store word-score pairs

  const handleInputChange = (event) => {
    setWord(event.target.value); // Update state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>Scrabble Score Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
