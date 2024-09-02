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
  TableRow,
} from "./App.styles"; // Import the styled components

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
          ...prevScores,
          { word, score: result.score },
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
          value={word}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
        <Button type="submit">Submit</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Word</TableHeader>
            <TableHeader>Score</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {wordScores.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.word}</TableCell>
              <TableCell>{entry.score}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </AppContainer>
  );
};

export default App;
