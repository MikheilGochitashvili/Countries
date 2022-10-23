import data from "../countries.json";
import Card from "./Card";
import {useEffect} from "react";
import Search from "./Search";
import {useState} from "react";
import "../css/Catalog.css";

const Catalog = () => {
  const [countries, setCountries] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState("");

  useEffect(() => {
    setCountries(
      data.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).filter((item) => item.region.includes(show))
    );
  }, [searchQuery, show]);

  return (
    <div className="catalog">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} show={show} setShow={setShow}/>
      {countries.map((item) => {
        return (
          <Card
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
