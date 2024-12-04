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
