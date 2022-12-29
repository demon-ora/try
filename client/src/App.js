import React from "react";
import Headerr from "./Header/header";
import Footerr from "./Footer/footer";
import LandingPage from "./screens/landingpage/LandingPage";

const App = () => {
  return (
    <div>
      <Headerr />
      <LandingPage />
      <Footerr />
    </div>
  );
};

export default App;
