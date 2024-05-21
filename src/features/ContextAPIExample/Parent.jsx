import { CaseLayout, GlobalLayout, ResolutionBox } from "../UI";
import FamilyContextProvider from "./context/FamilyContextProvider";
import FamilyName from "./FamilyName";
import FirstChild from "./FirstChild";
import SecundChild from "./SecundChild";

export default function Parent() {
  return (
    <GlobalLayout>
      <CaseLayout
        name={"Case 4: Context API Example"}
        description={
          "Using the Context API, we can pass data through the component tree without having to pass props down manually at every level. In this example, we have a FamilyContextProvider that provides the family state and setFamily function to the FamilyName, FirstChild, and SecundChild components. The FamilyName component displays the family state, while the FirstChild and SecundChild components allow the user to change the family state by clicking a button."
        }
        example={""}
        url={
          "https://www.youtube.com/watch?v=t9WmZFnE6Hg&list=WL&index=49&t=89s&pp=gAQBiAQB"
        }
        urlText={"Video Explanation"}
      />
      <ResolutionBox>
        <FamilyContextProvider>
          <FamilyName />
          <div className="flex justify-center items-center">
            <FirstChild />
            <SecundChild />
          </div>
        </FamilyContextProvider>
      </ResolutionBox>
    </GlobalLayout>
  );
}
