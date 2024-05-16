import { useEffect, useState } from "react";

export default function UseLongestWords() {
  const getWordsList = (word) => {
    const result = [];
    let longest = "";

    for (let i = 0; i < word.length; i++) {
      const actualLetter = word[i];
      const nextLetter = word[i + 1];

      longest += actualLetter;
      result.push(longest);
      if (actualLetter === nextLetter) {
        longest = "";
      }
    }

    return result;
  };
  const getLongestStr = (words) => {
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
      const element = words[i];
      if (element.length > longest.length) {
        longest = element;
      }
    }
    return longest;
  };
  const [words, setWords] = useState("");
  const [longestWords, setLongestWords] = useState([]);

  useEffect(() => {
    const wordsList = getWordsList(words);
    const response = getLongestStr(wordsList);
    setLongestWords(response);
  }, [words]);

  return {
    words,
    setWords,
    longestWords,
  };
}
