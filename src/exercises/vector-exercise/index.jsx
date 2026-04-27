import { useState } from 'react';
import './styles.scss';

function VectorExercise() {
  const buildBoard = (width) => {
    const column = [];
    for (let i = 0; i < width; i++) {
      const row = [];

      for (let j = 0; j < width; j++) {
        row.push('-');
      }

      column.push(row);
    }
    return column;
  };

  const [turn, setTurn] = useState('X');
  const [width, setWidth] = useState(3);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(buildBoard(width));

  const changeWidth = (width) => {
    setWidth(width);
    setBoard(buildBoard(width));
  };

  const determineWin = (currentBoard) => {
    // Win - all of a row is the same turn value (X or O)
    // OR - all of a column is the same turn value
    // OR - all of a diagonal left/right are the same value
    for (let i = 0; i < width; i++) {
      const firstRowVal =
        currentBoard[i][0] !== '-' ? currentBoard[i][0] : 'SKIP';
      for (let j = 0; j < width; j++) {
        console.log(currentBoard[i]);
        if (firstRowVal === 'SKIP' || currentBoard[i][j] !== firstRowVal) {
          break;
        }
        // If we got to the end, we have a winner!
        if (j === width - 1 && currentBoard[i][j] === firstRowVal) {
          return true;
        }
      }
    }

    // Any column?
    for (let i = 0; i < width; i++) {
      const firstColVal =
        currentBoard[0][i] !== '-' ? currentBoard[0][i] : 'SKIP';
      for (let j = 0; j < width; j++) {
        if (firstColVal === 'SKIP' || currentBoard[j][i] !== firstColVal) {
          break;
        }
        // If we got to the end, we have a winner!
        if (j === width - 1 && currentBoard[j][i] === firstColVal) {
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
      if (i === width - 1 && currentBoard[i][i] === firstDiagVal) {
        return true;
      }
    }

    const max = width - 1;
    // Right diagonal..., i.e., 0,2; 1,1; 2,0 for a 3x3 board
    firstDiagVal = currentBoard[max][0] !== '-' ? currentBoard[max][0] : 'SKIP';
    for (let i = 0; i < width; i++) {
      if (
        firstDiagVal === 'SKIP' ||
        currentBoard[i][max - i] !== firstDiagVal
      ) {
        break;
      }
      if (i === width - 1 && currentBoard[i][max - i] === firstDiagVal) {
        return true;
      }
    }

    return false;
  };

  const clickHandler = (row, column) => {
    const newBoard = [...board];

    if (newBoard[row][column] !== '-') {
      return;
    }

    // Otherwise:
    newBoard[row][column] = turn;

    // Did someone win or are there no more spaces? If yes, end the game.
    if (determineWin(newBoard)) {
      setWinner(turn);
    }

    setBoard(newBoard);

    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <main className="vector__section">
      <header>
        <h1>Vector technical interview space</h1>
      </header>
      <section className="interview__card">
        <div className="interview__controls">
          <label htmlFor="width">Width: </label>
          <input
            id="width"
            max={9}
            min={3}
            type="number"
            value={width}
            onChange={(e) => changeWidth(e.target.value)}
          ></input>
          <p>Current turn: {turn}</p>
        </div>
        {winner && (
          <>
            <p>We have a winner! It is {winner}!</p>
            <button
              type="button"
              onClick={() => {
                setBoard(buildBoard(width));
                setWinner(null);
              }}
            >
              Restart
            </button>
          </>
        )}
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex * 10000}>
              {row.map((column, colIndex) => {
                return (
                  <button
                    disabled={winner}
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
