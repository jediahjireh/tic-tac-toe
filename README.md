# Tic-Tac-Toe Game

<!-- TOC -->

- [Tic-Tac-Toe Game](#tic-tac-toe-game)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Credits](#credits)
  - [License](#license)

This is a simple **Tic-Tac-Toe** game built using **React**, **Vite.js** and **Tailwind CSS**, styled to resemble playing on a notepad with traditional pen writing and a lined paper background. The game allows two players to take turns playing as either 'X' or 'O' on a 3x3 grid and it keeps track of the game's state, allowing you to revisit any past move.

## Features

- Play a 2-player game of Tic-Tac-Toe.
- Displays the current player’s turn and the winner when the game ends.
- Allows you to navigate through the game's move history and jump to any move.
- Styled to give users the traditional feel of a game of X's and O's, with:
  - **Handwriting-style custom font** for the game text, simulating traditional pen writing.
  - **Lined notepad background** created using a CSS pattern.

---

## Screenshots

Here are a few screenshots showcasing the different stages of the game:

1. **Game Start:**

   ![Game Start](./docs/images/screenshots/game-start.png)

2. **Player X Wins:**

   ![Player X Wins](./docs/images/screenshots/x-wins.png)

3. **Player O Wins:**

   ![Player O Wins](./docs/images/screenshots/o-wins.png)

4. **Game is a Draw:**

   ![Draw](./docs/images/screenshots/draw.png)

5. **Tracked Move History:**

   ![Tracked Move History](./docs/images/screenshots/game-history.png)

---

## Technologies Used

- **React** for building the game’s UI and managing the game state.
- **Vite.js** for fast project setup and efficient development environment
- **Tailwind CSS** for styling the application.
- **Custom Font** to simulate handwriting.
- **CSS for lined background** to simulate a notepad background:

  ```css
  .lined-background {
    background-image: linear-gradient(to bottom, #e0e0e0 1px, transparent 1px);
    background-size: 100% 20px;
    background-repeat: repeat-y;
  }
  ```

---

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

   ```zsh
   git clone https://github.com/jediahjireh/tic-tac-toe.git
   ```

2. Navigate to the project directory:

   ```zsh
   cd tic-tac-toe
   ```

3. Install the required dependencies:

   ```zsh
   npm install
   ```

4. Start the development server using Vite:

   ```zsh
   npm run dev
   ```

5. Open your browser and visit the [default localhost](http://localhost:5173) to view the game.

---

## Project Structure

1. **[`components/Square.jsx`](./src/components/Square.jsx)**  
   Represents each square in the 3x3 grid. This component displays either 'X', 'O', or is blank and it handles the click event to update the game state.

2. **[`components/Board.jsx`](./src/components/Board.jsx)**  
   Manages the 3x3 grid of squares. It calculates whether there’s a winner or a draw and displays the game status.

3. **[`components/Game.jsx`](./src/components/Game.jsx)**  
   The main component that controls the game logic, including tracking move history, determining the current player and rendering the board and move history.

4. **[`utils/calculateWinner.js`](./src/utils/calculateWinner.js)**  
   Contains the helper function that determines if there is a winner by checking the possible winning combinations in the game grid.

---

## Credits

I built this project in appreciation of the resources provided in React's documentation, particularly those tailored for hands-on learners. As they’ve noted:

> "This tutorial is designed for people who prefer to learn by doing and want to quickly try making something tangible..."

I referenced this tutorial and built upon it: [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---
