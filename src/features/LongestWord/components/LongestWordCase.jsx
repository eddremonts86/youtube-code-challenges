import { CaseLayout, GlobalLayout, ResolutionBox } from "../../UI";

import LongestWords from "./LongestWords";
export default function LongestWordCase() {
  return (
    <GlobalLayout>
      <CaseLayout
        name={"Case 1: Get the longest string"}
        description={
          "Given a word, write a function that returns the longest string without repeating characters."
        }
        example={
          "Fx: Using 'This is the most beautiful word, I feel like a bird' app should return 'This is the most beautiful word, I fe'"
        }
        url={"https://www.youtube.com/watch?v=zue3lAZyAec"}
        urlText={"Video Explanation"}
      />
      <ResolutionBox>
        <LongestWords />
      </ResolutionBox>
    </GlobalLayout>
  );
}
