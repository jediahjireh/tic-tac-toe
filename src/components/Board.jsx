import { calculateWinner } from "../utils/calculateWinner.js";
import Square from "./Square.jsx";
import { useMemo } from "react";

// component which contains the 3x3 grid of squares
export default function Board({ currentPlayer, squares, onPlay }) {
  // call function to determine if there is a winner
  const winner = useMemo(() => calculateWinner(squares), [squares]);

  // notify user of their move's outcome
  let status;
  // class for styling the status
  let statusClass = "";
  if (winner) {
    status = "Winner: " + winner;
    statusClass = "underline underline-offset-8";
  }
  // check if all squares are filled
  else if (squares.every((square) => square)) {
    status = "Draw";
    statusClass = "underline underline-offset-8";
  } else {
    status = `Your turn: ${currentPlayer}`;
  }

  // handle the logic when a square is clicked
  function handleClick(i) {
    // return early if there is already a winner or the square is filled
    if (calculateWinner(squares) || squares[i]) return;
    // copy the current state of the squares array
    const nextSquares = squares.slice();
    // set the value of the clicked square
    nextSquares[i] = currentPlayer;
    // call function to update the state in the parent component
    onPlay(nextSquares);
  }

  // handle the logic when the button is clicked
  function handleButtonClick() {
    if (winner || squares.every((square) => square)) {
      // reset the game state
      window.location.reload();
    } else {
      // reload the page to act as a new game trigger
      window.location.reload();
    }
  }

  // return 9 square components arranged in 3 rows
  return (
    <div className="space-y-4 border p-20">
      {/* button to restart or start a new game */}
      <button
        onClick={handleButtonClick}
        className="hover:text-blue-500 text-blue-700 text-xl"
      >
        {winner || squares.every((square) => square) ? "new game" : "restart"}
      </button>
      <header className="text-6xl flex flex-row justify-center font-bold text-gray-700">
        tic tac toe
      </header>
      <main className="flex flex-row justify-center items-center p-4">
        <div className="grid grid-cols-3 gap-2">
          {squares.map((value, i) => (
            <Square
              key={i}
              className="p-4"
              value={value}
              onSquareClick={() => handleClick(i)}
            />
          ))}
        </div>
      </main>
      <div
        className={`flex flex-row justify-center text-3xl font-bold text-gray-700 ${statusClass}`}
      >
        {status}
      </div>
    </div>
  );
}
