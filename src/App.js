import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Calendar from "./Calendar";
import Contact from "./Contact";
import Ball from "./components/Ball";

function App() {
  const [ballClass, setBallClass] = useState("");
  const [pageClass, setPageClass] = useState("page");
  const [returnPage, setReturnPage] = useState(1);

  function loadPage() {
    setBallClass("load-page");
    setPageClass("page active");
    setTimeout(() => setReturnPage(2), 2400);
  }

  if (returnPage === 1) {
    return (
      <BrowserRouter>
        <div className={pageClass}>
          <Nav />
          <Routes>
            <Route path="/personal-portfolio-react/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Ball loadPage={() => loadPage()} class={ballClass}></Ball>
      </BrowserRouter>
    );
  } else if (returnPage === 2) {
    return (
      <BrowserRouter>
        <div className={pageClass}>
          <Nav />
          <Routes>
            <Route path="/personal-portfolio-react/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
