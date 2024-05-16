import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export default function Board({ boardSize }) {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState([]);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    const grid = Array.from({ length: boardSize }, () =>
      Array.from({ length: boardSize }, () => null)
    );
    setBoard(grid);
  }, [boardSize]);

  const winnerX = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i].every((item) => item === board[i][0] && item !== null)) {
        return true;
      }
    }
    return false;
  };

  const winnerY = () => {
    const transposedBoard = [];
    for (let i = 0; i < board.length; i++) {
      const row = [];
      for (let j = 0; j < board.length; j++) {
        row.push(board[j][i]);
      }
      transposedBoard.push(row);
    }
    return winnerX(transposedBoard);
  };

  const winnerDiagonal = () => {
    return false;
  };

  const updatePosition = (rowIndex, colIndex) => {
    board[rowIndex][colIndex] = currentPlayer;
    setBoard([...board]);
    setCurrentPlayer((prev) => prev === "X" ? "O" : "X");

    const hasWinner = winnerX(board) || winnerY(board) || winnerDiagonal(board);
    if (hasWinner) {
      setWinner(currentPlayer);
    }
  };

  return (
    <>
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex"
        >
          {row.map((_, colIndex) => (
            <div
              key={colIndex}
              className="border border-gray-400 w-20 h-20 flex justify-center items-center relative"
              onClick={() => updatePosition(rowIndex, colIndex)}
            >
              <span className="absolute top-0 right-0 bg-slate-400 rounded-s-sm p-1 text-blue-950 text-xs">
                {rowIndex}, {colIndex}
              </span>
              <span className="text-4xl">{board[rowIndex][colIndex]}</span>
            </div>
          ))}
        </div>
      ))}

      {board.length > 1 && winner && (
        <p className="text-3xl my-5">
          {" "}
          Congratulations player{" "}
          <span className="text-red-700">{currentPlayer}</span> you won!{" "}
        </p>
      )}
    </>
  );
}

Board.propTypes = {
  boardSize: {
    isRequired: PropTypes.node.isRequired,
    typeof: "number",
    default: 3,
  },
};
