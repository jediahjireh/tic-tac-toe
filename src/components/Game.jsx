import { useState } from "react";
import Board from "./Board.jsx";

// component to manage the state and control the entire game
export default function Game() {
  // initialise history to store the state of squares after each move
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // initialise the current move number to track which move the player is on
  const [currentMove, setCurrentMove] = useState(0);
  // determine the next player based on whether the current move number is even or odd
  const xIsNext = currentMove % 2 === 0;
  // get the current state of the squares for the current move
  const currentSquares = history[currentMove];

  // determine the current player
  const currentPlayer = xIsNext ? "X" : "O";

  // handle the logic when a move is made
  function handlePlay(nextSquares) {
    // create a new history array up to the current move and add the next state of squares
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // update the state with the new history
    setHistory(nextHistory);
    // set the current move to the last move
    setCurrentMove(nextHistory.length - 1);
  }

  // allow user to jump to a specific move in the move history being tracked for current game
  function jumpTo(nextMove) {
    // update the current move to the selected move number
    setCurrentMove(nextMove);
  }

  // map over the history array to display buttons for each move
  const moves = history.map((_, move) => {
    // set the description for each move
    const description = move > 0 ? "Go to move #" + move : "Go to game start";
    // return a button that jumps to the selected move when clicked
    return (
      <li key={move}>
        <button
          className="text-blue-700 underline hover:text-blue-500"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  // render the board component and move history
  return (
    <div className="font-handwriting lined-background flex flex-row min-h-screen justify-center items-center bg-yellow-50 p-8">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
        <div className="game-board col-span-1 md:col-span-8">
          <Board
            currentPlayer={currentPlayer}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info text-xl col-span-1 md:col-span-4 md:mt-20">
          <h2 className="mb-2">Tracked move history:</h2>
          <ol className="space-y-2">{moves}</ol>
        </div>
      </div>
    </div>
  );
}
