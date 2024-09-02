import React, { useState } from "react";
import {
  AppContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
  Table,
  TableHeader,
  TableCell,
  WordTile,
} from "./App.styles";
import { letterScores } from "./data/scrabbleScore";

const App = () => {
  const [word, setWord] = useState(""); // State to store the current input word
  const [wordScores, setWordScores] = useState([]); // State to store word-score pairs
  const [error, setError] = useState(""); // State to store error messages

  const handleInputChange = (event) => {
    setWord(event.target.value); // Update state with the input value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!word.match(/^[a-zA-Z]+$/)) {
      setError("Please enter a valid word with letters only.");
      return;
    }

    // call the API to calculate the Scrabble score
    try {
      const response = await fetch("http://localhost:3001/api/scrabble-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word }),
      });

      const result = await response.json();

      if (response.ok) {
        setWordScores((prevScores) => [
          { word, score: result.score },
          ...prevScores,
        ]);
        setWord(""); // Clear the input field after submission
        setError(""); // Clear any previous errors
      } else {
        setError(result.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError(
        "An error occurred. Please check your network connection and try again."
      );
    }
  };

  return (
    <AppContainer>
      <h1>Scrabble Score Calculator</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
        <Button type="submit">Submit</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Table>
        <thead>
          <tr>
            <TableHeader>Word</TableHeader>
            <TableHeader>Score</TableHeader>
          </tr>
        </thead>
        <tbody>
          {wordScores.map((entry, index) => (
            <tr key={index}>
              <TableCell isOddRow={index % 2 !== 0}>
                {[...entry.word.toUpperCase()].map((letter, idx) => (
                  <WordTile key={idx} data-value={letterScores[letter]}>
                    {letter}
                  </WordTile>
                ))}
              </TableCell>
              <TableCell isOddRow={index % 2 !== 0}>{entry.score}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </AppContainer>
  );
};

export default App;
