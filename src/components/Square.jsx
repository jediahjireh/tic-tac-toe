import React from "react";

// component to represent a square button on the board
const Square = React.memo(function Square({ value, onSquareClick }) {
  // return a button with the value 'X', 'O' or null
  return (
    <button
      className="w-16 h-16 border-2 border-gray-500 text-5xl hover:bg-yellow-100 focus:outline-none"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
});

export default Square;
