import { useState } from "react";
import Board from "./Board";
export default function TicTacToe() {
  const [board, setBoard] = useState(3);

  return (
    <>
      <div className="my-6 flex-col">
        <div>
          <label
            htmlFor="tic-tac-toe"
            className="mr-2"
          >
            How many rows and columns?
          </label>
        </div>
        <div>
          <input
            type="text"
            id="tic-tac-toe"
            name="tic-tac-toe"
            placeholder="How is the board? 3x3"
            className="rounded-md p-2 w-auto border-2 border-gray-400"
            value={board}
            onChange={(e) => {
              setBoard(e.target.value);
            }}
          />
        </div>

        {board > 0 && (
          <div className="my-3 mx-0 ">
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
      <div className="mx-3 my-5">
        <Board boardSize={board} />
      </div>
    </>
  );
}
