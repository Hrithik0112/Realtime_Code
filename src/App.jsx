import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LIveCodePage from "./pages/LIveCodePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor/:roomId" element={<LIveCodePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
