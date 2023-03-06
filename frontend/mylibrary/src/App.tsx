import React from "react";
import "./App.css";
import { Carousel } from "./layouts/HomePage/Carousel";
import { FeaturedBooks } from "./layouts/HomePage/FeaturedBooks";
import { Heros } from "./layouts/HomePage/Heros";
import { MyLibraryServices } from "./layouts/HomePage/MyLibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <FeaturedBooks />
      <Carousel />
      <Heros />
      <MyLibraryServices />
      <Footer />
    </div>
  );
}

export default App;