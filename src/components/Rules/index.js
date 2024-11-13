import React from 'react';
import './style.css';

const Rules = () => {
  return (
    <div className="rules">
      <h2>Game Rules</h2>
      <p><strong>Objective</strong></p>
      <p>The goal of Minesweeper is to uncover all the safe squares on the board without triggering any bombs. Use logic and a bit of luck to find and flag all the bombs!</p>

      <p><strong>How to Play</strong></p>
      <ul>
        <li>
          <strong>The Game Board</strong>: The board is a grid of squares, some of which contain hidden bombs.
          <ul>
            <li><strong>Easy</strong>: 8x8 grid with 10 bombs</li>
            <li><strong>Medium</strong>: 16x16 grid with 40 bombs</li>
            <li><strong>Hard</strong>: 30x16 grid with 99 bombs</li>
          </ul>
        </li>
        <li>
          <strong>Safe First Click</strong>: The first square you click will always be safe and will not contain a bomb.
        </li>
        <li>
          <strong>Revealing Squares</strong>: Left-click on a square to reveal what’s underneath.
          <ul>
            <li>If the square contains a bomb, the game is over, and you lose.</li>
            <li>If the square is safe, it will show a number indicating how many bombs are in the surrounding eight squares.</li>
            <li>A square with no nearby bombs will appear blank.</li>
          </ul>
        </li>
        <li>
          <strong>Flagging Bombs</strong>: Right-click on a square to place a flag if you think it hides a bomb.
          <ul>
            <li>Flags help you mark potential bombs, making it easier to clear safe squares without worry.</li>
            <li>Right-click a flagged square again to remove the flag.</li>
          </ul>
        </li>
        <li>
          <strong>Winning the Game</strong>: You win by uncovering all the safe squares without clicking on any bombs. When you’ve flagged all bombs and uncovered all safe squares, you’ll see a “Game Over! You Won!” message.
        </li>
        <li>
          <strong>Losing the Game</strong>: If you click on a square with a bomb, the game will reveal all bomb locations and display “Game Over! You Lost.”
        </li>
      </ul>

      <p className="tips">Look for numbers to deduce which surrounding squares are safe. Use flags to keep track of where you think bombs are located. Remember, a single mistake can end the game, so take your time and think carefully!</p>
    </div>
  );
};

export default Rules;