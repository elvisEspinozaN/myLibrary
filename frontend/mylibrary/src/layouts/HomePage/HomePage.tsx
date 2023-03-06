import { Carousel } from "./components/Carousel";
import { FeaturedBooks } from "./components/FeaturedBooks";
import { Heros } from "./components/Heros";
import { MyLibraryServices } from "./components/MyLibraryServices";

export const HomePage = () => {
  return (
    <>
      <FeaturedBooks />
      <Carousel />
      <Heros />
      <MyLibraryServices />
    </>
  );
};
