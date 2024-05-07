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
    return false;
  };

  const winnerDiagonal = () => {
    return false;
  };

  const updatePosition = (rowIndex, colIndex) => {
    board[rowIndex][colIndex] = currentPlayer;
    setBoard([...board]);

    const hasWinner = winnerX(board) || winnerY() || winnerDiagonal();
    if (hasWinner) {
      setWinner(currentPlayer);
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
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

      {winner && (
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
