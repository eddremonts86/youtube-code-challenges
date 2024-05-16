import { useState } from "react";
import Board from "./Board";
export default function TicTacToe() {
  const [board, setBoard] = useState(3);

  return (
    <>
      <div className="my-6 flex-col">
        <div className="mr-2 mb-3">
          <label htmlFor="tic-tac-toe">How many rows and columns?</label>
        </div>
        <div className="flex">
          <input
            type="number"
            min={1}
            max={10}
            id="tic-tac-toe"
            name="tic-tac-toe"
            placeholder="How is the board? 3x3"
            className="rounded-md p-2 w-auto border-2 border-gray-400 min-w-96"
            value={board}
            onChange={(e) => {
              setBoard(e.target.value);
            }}
          />

          {board > 0 && (
            <div className="my-3 mx-0">
              <button
                className="bg-blue-500 text-white px-5 py-1 rounded-md ml-2"
                onClick={() => {
                  setBoard(0);
                }}
              >
                Resect
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mx-3 my-5">
        <Board boardSize={board} />
      </div>
    </>
  );
}
