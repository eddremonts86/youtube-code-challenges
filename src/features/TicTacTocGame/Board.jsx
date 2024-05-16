import PropTypes from "prop-types";
import { useGameWinner } from "./useGameWinner";
export default function Board({ boardSize }) {
  const { board, updatePosition, winner, currentPlayer } =
    useGameWinner(boardSize);

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
              key={`${rowIndex}-${colIndex}`}
              className="border border-gray-400 w-20 h-20 flex justify-center items-center relative"
              onClick={() => updatePosition(rowIndex, colIndex)}
              style={
                board[rowIndex][colIndex] !== null || winner
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
  boardSize: PropTypes.number.isRequired || 3,
};
