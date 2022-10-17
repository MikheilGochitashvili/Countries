import data from "../countries.json";
import Card from "./Card";
import "../css/Catalog.css";

const Catalog = () => {
  return (
    <div className="catalog">
      {data.map((item) => {
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
