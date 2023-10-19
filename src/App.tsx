import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./pages/Home";

function App() {
  // clear the "image" key in local storage when the app loads
  useEffect(() => {
    localStorage.setItem("image", "/profile.png");
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
