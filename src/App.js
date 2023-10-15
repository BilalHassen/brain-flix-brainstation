import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Page from "./pages/Page/Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/video/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
