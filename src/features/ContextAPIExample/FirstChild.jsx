import { useContext } from "react";
import { FamilyContext } from "./context/FamilyContextProvider"; // Import FamilyContext from the appropriate file

export default function FirstChild() {
  const { family, setFamily } = useContext(FamilyContext);
  return (
    <div className="border-spacing-1 p-6 m-3 bg-slate-700 rounded-lg">
      <h2 className="text-4xl">Oldest dotter</h2>
      <p className="text-1xl">Family: {family}</p>
      <button
        onClick={() => setFamily("The Smiths")}
        className="rounded-md bg-black text-white w-32 p-2 my-4"
      >
        Change Family
      </button>
    </div>
  );
}
