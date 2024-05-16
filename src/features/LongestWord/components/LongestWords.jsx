import UseLongestWords from "../hooks/UseLongestWords";

export default function LongestWords() {
  const { setWords, longestWords } = UseLongestWords();

  return (
    <div className="flex-col">
      <label>
        <span className="mr-2 my-3">Introduce a Words</span>
        <input
          className="rounded-md p-2 w-full border-2 border-gray-400 my-3 sm:w-auto"
          type="text"
          placeholder="Introduce a sentence!!!"
          onChange={(e) => {
            setWords(e.target.value);
          }}
        ></input>
      </label>
      <p className="text-xl"> Longest words :</p>
      <p className="text-red-300"> {longestWords}</p>
    </div>
  );
}
