import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LIveCodePage from "./pages/LIveCodePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
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
