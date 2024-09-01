const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const cors = require("cors");

const calculateScrabbleScore = require("./utils/scrabbleScore"); // Import the utility function

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(pino);

app.get("/api/greeting", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello World!` }));
});

// New Scrabble score endpoint
app.post("/api/scrabble-score", (req, res) => {
  const { word } = req.body; // Extract the 'word' property from the JSON request body
  const result = calculateScrabbleScore(word); // Call the utility function to calculate the Scrabble score

  if (result.error) {
    // Check if there was an error in calculating the score
    res.status(400).json({ error: result.error }); // Respond with a 400 status code and the error message in JSON format
  } else {
    res.json(result); // If no error, respond with the calculated score in JSON format
  }
});

// Modified server setup incase 3001 is already in use and the server needs to run on a different port
const PORT = process.env.PORT || 3001; // Use environment variable for the port if available, otherwise default to 3001
app.listen(
  PORT,
  () => console.log(`Express server is running on localhost:${PORT}`) // Log a message indicating the server has started
);
