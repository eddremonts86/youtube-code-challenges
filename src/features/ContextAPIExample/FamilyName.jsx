import { useContext } from "react";
import { FamilyContext } from "./context/FamilyContextProvider"; // Import FamilyContext
export default function FamilyName() {
  const { family } = useContext(FamilyContext);
  return <h1 className="text-5xl flex justify-center py-3">{family}</h1>;
}
