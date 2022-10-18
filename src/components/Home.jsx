import "../css/Home.css";
import Header from "./Header";

import Search from "./Search";
import Catalog from "./Catalog";

const Home = () => {
  return (
    <body>
      <Header />
      <Search />

      <Catalog />
    </body>
  );
};

export default Home;
