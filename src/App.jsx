import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayaut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index lazy={() => import("./pages/Home")} />
          <Route lazy={() => import("./pages/About")} />
          <Route lazy={() => import("./pages/Contract")} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
