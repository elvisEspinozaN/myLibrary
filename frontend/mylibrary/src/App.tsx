import React from "react";
import "./App.css";
import { FeaturedBooks } from "./layouts/HomePage/FeaturedBooks";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <FeaturedBooks />
    </div>
  );
}

export default App;
