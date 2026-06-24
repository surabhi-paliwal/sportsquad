import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FindGames from "./pages/FindGames";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/games"
          element={<FindGames />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;