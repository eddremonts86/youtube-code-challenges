import TestLayout from "../UI/TestLayout";
import TestCaseLayout from "../UI/TestCaseLayout";

import TicTacToe from "./TicTacToe";
export default function TicTacToeCaseLayout() {
  return (
    <TestLayout>
      <TestCaseLayout
        name={"Case 2: Tic tac toe game"}
        description={
          "Given a random grid (3x3) board of a tic-tac-toe game, determine the winner. The board is given as a list of lists, where the inner lists represent a row of the board."
        }
        example={""}
        url={"https://www.youtube.com/watch?v=vweARwTPmg4"}
        urlText={"Video Explanation"}
      />

      <div>
        <h2 className=" text-xl mb-2">Resolution</h2>
        <TicTacToe />
      </div>
    </TestLayout>
  );
}
