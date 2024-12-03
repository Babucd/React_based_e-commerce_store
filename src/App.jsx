import React from "react";
import NavBar from "./coponentes/NavBar";
import Main from "./coponentes/Main";
import SubMain from "./coponentes/SubMain";
import Nextsub from "./coponentes/Nextsub";
import Bags from "./coponentes/Bags";
import SecondBag from "./coponentes/Secondbag";
import Text from "./coponentes/Text";
import Men from "./coponentes/men";
import { Footer } from "./coponentes/Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Main />
      <SubMain />
      <Nextsub />
      <Bags />
      <SecondBag />
      <Text />
      <Men />
      <Footer />
    </>
  );
};

export default App;

// create footer that contains four consist of five

// 1. brand name
// locaton : left
// decripction

// 2. shop
// location after the left more bit space between these two
// backpacks
// luggage
// accessories

// 3. about
// location after the shop
// about us
// quliry
// shops

// 4 . more
// location after the about
// career
// press
// pricacy policy

// 5. support
// contact usFAQ
// teams & conditions
