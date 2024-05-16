import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export default function Board({ boardSize }) {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (boardSize === 0) {
      setWinner(null);
      setBoard([]);
      return;
    }
    const grid = Array.from(
      {
        length: boardSize,
      },
      () =>
        Array.from(
          {
            length: boardSize,
          },
          () => null
        )
    );
    setBoard(grid);
    setCurrentPlayer("X");
  }, [boardSize]);

  const winnerXAxis = (board) => {
    for (const row of board) {
      if (row.every((item) => item === row[0] && item !== null)) {
        setWinner(currentPlayer);
        return true;
      }
    }
    return false;
  };

  const winnerYAxis = () => {
    const transposedBoard = [];
    for (let i = 0; i < board.length; i++) {
      const row = [];
      for (const boardRow of board) {
        row.push(boardRow[i]);
      }
      transposedBoard.push(row);
    }
    return winnerXAxis(transposedBoard);
  };

  const winnerDiagonal = () => {
    const diagonal1 = [];
    const diagonal2 = [];

    for (let i = 0; i < board.length; i++) {
      diagonal1.push(board[i][i]);
      diagonal2.push(board[i][board.length - 1 - i]);
    }
    return winnerXAxis([diagonal1, diagonal2]);
  };

  const updatePosition = (rowIndex, colIndex) => {
    board[rowIndex][colIndex] = currentPlayer;
    setBoard([...board]);
    if (winnerXAxis(board) || winnerYAxis() || winnerDiagonal()) {
      return;
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return (
    <>
      {board.length > 1 && winner && (
        <p className="text-2xl my-5">
          {" "}
          Congratulations player{" "}
          <span className="text-red-700">{currentPlayer}</span> you won!
        </p>
      )}
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex"
        >
          {row.map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`} // Fix: Use a unique identifier for each element in the row array
              className="border border-gray-400 w-20 h-20 flex justify-center items-center relative"
              onClick={() => updatePosition(rowIndex, colIndex)}
              style={
                board[rowIndex][colIndex] !== null
                  ? { cursor: "not-allowed", pointerEvents: "none" }
                  : { cursor: "pointer", pointerEvents: "auto" }
              }
            >
              <span className="absolute top-0 right-0 bg-slate-400 rounded-s-sm p-1 text-blue-950 text-xs">
                {rowIndex}, {colIndex}
              </span>
              <span
                className="text-4xl"
                style={{
                  color: board[rowIndex][colIndex] === "X" ? "red" : "white",
                }}
              >
                {board[rowIndex][colIndex]}
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

Board.propTypes = {
  boardSize: PropTypes.number.isRequired,
};
