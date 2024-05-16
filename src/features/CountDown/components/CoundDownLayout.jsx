import { GlobalLayout, CaseLayout, ResolutionBox } from "../../UI";
import CounDown from "./CoundDown";

export default function TicTacToeCaseLayout() {
  return (
    <GlobalLayout>
      <CaseLayout
        name={"Case 2: Tic tac toe game"}
        description={
          "Given a random grid (3x3) board of a tic-tac-toe game, determine the winnerYAxis. The board is given as a list of lists, where the inner lists represent a row of the board."
        }
        example={""}
        url={"https://www.youtube.com/watch?v=vweARwTPmg4"}
        urlText={"Video Explanation"}
      />
      <ResolutionBox>
        <CounDown countDownTime={1000} />
      </ResolutionBox>
    </GlobalLayout>
  );
}
