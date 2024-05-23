import { GlobalLayout, CaseLayout, ResolutionBox } from "../../UI";
import CounDown from "./CoundDown";

export default function TicTacToeCaseLayout() {
  return (
    <GlobalLayout>
      <CaseLayout
        name={"Case 3: CountDown with memory"}
        description={
          "In this example, we have a CountDown component that displays a countdown timer. The timer starts at 1000 and counts down to 0. When the timer reaches 0, it resets to 1000. The CountDown component uses the useState hook to manage the timer state and the useEffect hook to update the timer every second. The CountDown component also uses the useRef hook to store the interval ID so that it can be cleared when the component unmounts."
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
