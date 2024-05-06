import LongestWords from "./LongestWords";
import TestLayout from "../TestLayout";
export default function LongestWordCase() {
  return (
    <TestLayout>
      <div className="max-w-72 bg-blue-900 p-6 rounded-md">
        <h2>
          Case 1: <br />
          Get the longest string
        </h2>
        <p>
          Given a word, write a function that returns the longest string without
          repeating characters.
        </p>
        <p className="pt-5">Example</p>
        <p>
          Init: &quot;This is the most beautiful word, I feel like a bird&quot;
        </p>
        <p>Response: &quot;This is the most beautiful word, I fe&quot;</p>
        <p className="my-3">
          <a
            href="https://www.youtube.com/watch?v=zue3lAZyAec"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            {" "}
            Video Explanation
          </a>
        </p>
      </div>
      <div>
        <h2 className=" text-xl mb-2">Resolution</h2>
        <LongestWords />
      </div>
    </TestLayout>
  );
}
