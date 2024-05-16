import TestCaseLayout from "../UI/TestCaseLayout";
import TestLayout from "../UI/TestLayout";
import LongestWords from "./LongestWords";
export default function LongestWordCase() {
  return (
    <TestLayout>
      <TestCaseLayout
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
      <div>
        <h2 className=" text-xl mb-2">Resolution</h2>
        <LongestWords />
      </div>
    </TestLayout>
  );
}
