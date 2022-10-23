import "../css/Search.css";
import SearchLogo from "../IMG/search_logo.png";
import {useState} from "react";

const Search = ({setSearchQuery}) => {
  const [show, setShow] = useState("Filter By Region");
  const [rotate, setRotate] = useState(false);
  return (
    <div className="search_container">
      <div className="search_input_wrapper">
        <img src={SearchLogo} alt="search_logo" className="search_logo" />
        <input
          type="search"
          className="search_input"
          placeholder="Search for a country..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
      <div
        className="menu_dropdown_container"
        onClick={() => {
          setRotate(!rotate);
        }}
      >
        <div className="menu_dd_button">
          <span>{show}</span>
          <div className={`arrow ${rotate ? "rotate" : ""}`}></div>
        </div>
        <div
          className="options_contaienr"
          style={{display: rotate ? "flex" : "none"}}
        >
          <span
            value={"Africa"}
            onClick={(e) => {
              setShow(e.currentTarget.value);
            }}
          >
            Africa
          </span>
          <span value={"America"}>America</span>
          <span value={"Asia"}>Asia</span>
          <span value={"Europe"}>Europe</span>
          <span value={"Oceania"}>Oceania</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
