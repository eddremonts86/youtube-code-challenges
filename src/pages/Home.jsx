import "../App.css";
import LongestWord from "../features/LongestWord";
import TicTacToe from "../features/TicTacTocGame";
import CountDown from "../features/CountDown";

export default function Home() {
  return (
    <>
      <h1 className=" text-3xl mb-5 sm:text-5xl">
        Interview Test - from Youtube :){" "}
      </h1>
      <LongestWord />
      <TicTacToe />
      <CountDown />
    </>
  );
}

