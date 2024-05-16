import { useEffect, useState } from "react";
export function useGameWinner(boardSize: number) {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState(null as string | null);

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
    // @ts-ignore
    setBoard(grid);
    setCurrentPlayer("X");
  }, [boardSize]);

  const winnerXAxis = (board: string[][]) => {
    for (const row of board) {
      if (row.every((item) => item === row[0] && item !== null)) {
        setWinner(currentPlayer);
        return true;
      }
    }
    return false;
  };

  const winnerYAxis = () => {
    const transposedBoard: string[][] = []; // Provide the correct type for transposedBoard
    for (let i = 0; i < board.length; i++) {
      const row: string[] = []; // Provide the correct type for row
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

  const updatePosition = (
    rowIndex: string | number,
    colIndex: string | number
  ) => {
    // @ts-ignore
    board[rowIndex][colIndex] = currentPlayer;
    setBoard([...board]);
    if (winnerXAxis(board) || winnerYAxis() || winnerDiagonal()) {
      return;
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return { board, updatePosition, winner, currentPlayer };
}
