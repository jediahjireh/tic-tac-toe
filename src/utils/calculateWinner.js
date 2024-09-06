// helper function to determine if there is a winner
export function calculateWinner(squares) {
  // define all possible winning combinations
  const lines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  // loop through the winning combinations
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // check if the same player occupies all positions in a winning combination
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  // if no winner is found
  return null;
}
