import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project1 from "./pages/Project1";
import Page1 from "./pages/Page1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project1 />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
