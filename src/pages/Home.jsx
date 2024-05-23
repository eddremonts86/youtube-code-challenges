import "../App.css";
import Parent from "../features/ContextAPIExample/Parent";
import CountDown from "../features/CountDown";
import LongestWord from "../features/LongestWord";
import TicTacToe from "../features/TicTacTocGame";
import Post from "../features/FetchData/Post";

export default function Home() {
  return (
    <>
      <h1 className=" text-3xl mb-5 sm:text-5xl">
        Interview Test - from Youtube :){" "}
      </h1>
      <Post />
      <LongestWord />
      <TicTacToe />
      <CountDown />
      <Parent />
    </>
  );
};
