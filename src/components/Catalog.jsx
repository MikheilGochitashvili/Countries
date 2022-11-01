import data from "../countries.json";
import Card from "./Card";
import {useEffect} from "react";
import Search from "./Search";
import {useState} from "react";
import "../css/Catalog.css";

const Catalog = ({mode, setmode}) => {
  const [countries, setCountries] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState("");

  useEffect(() => {
    setCountries(
      data
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((item) => item.region.includes(show))
    );
  }, [searchQuery, show]);

  return (
    <div className="catalog" id="catalog" style={{background: mode ? "#eaeaea" : "#010409"}}>
      <Search
        mode={mode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        show={show}
        setShow={setShow}
      />
      {countries.map((item) => {
        return (
          <Card
            mode={mode}
            img={item.flags.png}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        );
      })}
    </div>
  );
};

export default Catalog;
