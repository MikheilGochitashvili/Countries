import "../css/Home.css";
import Header from "./Header";
import { useState } from "react";
import Catalog from "./Catalog";

const Home = () => {
  const [mode , setMode] = useState(false);
  return (
    <body>
      <Header mode={mode} setMode={setMode} />
      <Catalog mode={mode} setMode={setMode} />
    </body>
  );
};

export default Home;
