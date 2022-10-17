import "../css/Home.css";
import Header from "./Header";

import Search from "./Search";
import {useState} from "react";
import Catalog from "./Catalog";


const Home = () => {
  const [search, setSearch] = useState('')
  return (
    <body>
      <Header />
      <Search search={search} setSearch={setSearch} />
      
      <Catalog />
    </body>
  );
};

export default Home;
