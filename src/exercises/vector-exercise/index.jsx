import { useState } from 'react';
import './styles.scss';

function buildBoard(width) {
  return Array.from({ length: width }, () => Array(width).fill('-'));
}

function noEmptySpaces(currentBoard) {
  const fullBoard = currentBoard.flat(Infinity);
  return !fullBoard.includes('-');
}

function determineWin(currentBoard, width) {
  // Win - all of a row is the same turn value (X or O)
  // OR - all of a column is the same turn value
  // OR - all of a diagonal left/right are the same value

  const MAX_ARR_LENGTH = width - 1;

  // Check Rows
  for (let i = 0; i < width; i++) {
    const firstRowVal =
      currentBoard[i][0] !== '-' ? currentBoard[i][0] : 'SKIP';

    if (currentBoard[i].every((v) => v === firstRowVal)) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < width; i++) {
    const firstColVal =
      currentBoard[0][i] !== '-' ? currentBoard[0][i] : 'SKIP';
    for (let j = 0; j < width; j++) {
      if (firstColVal === 'SKIP' || currentBoard[j][i] !== firstColVal) {
        break;
      }
      // If we got to the end, we have a winner!
      if (j === MAX_ARR_LENGTH && currentBoard[j][i] === firstColVal) {
        return true;
      }
    }
  }

  // Left diagonal
  let firstDiagVal = currentBoard[0][0] !== '-' ? currentBoard[0][0] : 'SKIP';
  for (let i = 0; i < width; i++) {
    if (firstDiagVal === 'SKIP' || currentBoard[i][i] !== firstDiagVal) {
      break;
    }
    if (i === MAX_ARR_LENGTH && currentBoard[i][i] === firstDiagVal) {
      return true;
    }
  }

  // Right diagonal..., i.e., 0,2; 1,1; 2,0 for a 3x3 board
  firstDiagVal =
    currentBoard[MAX_ARR_LENGTH][0] !== '-'
      ? currentBoard[MAX_ARR_LENGTH][0]
      : 'SKIP';

  for (let i = 0; i < width; i++) {
    if (
      firstDiagVal === 'SKIP' ||
      currentBoard[i][MAX_ARR_LENGTH - i] !== firstDiagVal
    ) {
      break;
    }
    if (
      i === MAX_ARR_LENGTH &&
      currentBoard[i][MAX_ARR_LENGTH - i] === firstDiagVal
    ) {
      return true;
    }
  }

  return false;
}

function VectorExercise() {
  const [turn, setTurn] = useState('X');
  const [width, setWidth] = useState(3);
  const [winner, setWinner] = useState(null);
  const [catsGame, setCatsGame] = useState(null);
  const [board, setBoard] = useState(buildBoard(width));

  // Handle resetting the game.
  const resetGameHandler = (width) => {
    setBoard(buildBoard(width));
    setTurn('X');
    setWinner(null);
    setCatsGame(null);
  };

  // Handle changing the width of the board.
  const changeWidthHandler = (width) => {
    setWidth(width);
    resetGameHandler(width);
  };

  // Handle clicking on a game button.
  const clickHandler = (row, column) => {
    const newBoard = [...board];

    // If they clicked on a previously selected space, ignore it.
    if (newBoard[row][column] !== '-') {
      return;
    }

    // Set the space to be X or O.
    newBoard[row][column] = turn;

    // Did someone win or are there no more spaces? If yes, end the game.
    if (determineWin(newBoard, width)) {
      setWinner(turn);
    } else if (noEmptySpaces(newBoard)) {
      setCatsGame(true);
    }

    // Otherwise, show the new board state.
    setBoard(newBoard);

    // Change the turn from X -> O or O -> X.
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <main className="vector__section">
      <header>
        <h1>Vector technical interview space</h1>
      </header>
      <section className="interview__card">
        <div className="interview__controls">
          <label htmlFor="width">Game width: </label>
          <input
            a
            defaultValue={width}
            id="width"
            max={9}
            min={3}
            type="number"
            onChange={(e) => changeWidthHandler(parseInt(e.target.value, 10))}
          ></input>
          <button
            className="restart__button button-positive"
            type="button"
            onClick={() => resetGameHandler(width)}
          >
            Restart
          </button>
        </div>
        {winner && <p>We have a winner! It is {winner}!</p>}
        {catsGame && <p>No one wins! Try again.</p>}

        {!winner && (
          <p>
            Current turn: <strong>{turn}</strong>
          </p>
        )}
        {board.map((row, rowIndex) => {
          return (
            <div key={(rowIndex + 1) * 1000}>
              {row.map((column, colIndex) => {
                return (
                  <button
                    className="game__button "
                    disabled={winner || catsGame}
                    key={(colIndex + 1) * 10}
                    type="button"
                    onClick={() => clickHandler(rowIndex, colIndex)}
                  >
                    {column}
                  </button>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default VectorExercise;
