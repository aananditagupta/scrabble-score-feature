import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders the Scrabble Score Calculator header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Scrabble Score Calculator/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders input field and submit button", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter a word/i);
    const buttonElement = screen.getByText(/Submit/i);
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("displays an error message for invalid input", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter a word/i);
    const buttonElement = screen.getByText(/Submit/i);

    fireEvent.change(inputElement, { target: { value: "1234" } });
    fireEvent.click(buttonElement);

    // Expect an error message to be displayed
    const errorMessage = screen.getByText(
      /Please enter a valid word with letters only./i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders the table with word and score columns", () => {
    render(<App />);
    const wordColumnHeader = screen.getByText(/Word/i);
    const scoreColumnHeader = screen.getAllByText(/Score/i);
    expect(wordColumnHeader).toBeInTheDocument();
    expect(scoreColumnHeader[0]).toBeInTheDocument();
  });
});
