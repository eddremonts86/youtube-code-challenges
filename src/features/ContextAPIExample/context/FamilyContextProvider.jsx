import { createContext, useState } from "react";
export const FamilyContext = createContext(null);
import PropTypes from "prop-types";

export default function FamilyContextProvider({ children }) {
  const [family, setFamily] = useState("The Jhonsons");

  return (
    <FamilyContext.Provider value={{ family, setFamily }}>
      {children}
    </FamilyContext.Provider>
  );
}

FamilyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
