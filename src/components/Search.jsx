import "../css/Search.css";
import SearchLogo from "../IMG/search_logo.png";
import {useState} from "react";

const Search = ({setSearchQuery, setShow, show}) => {
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
          <span>
            Filter By Region: <span id="show">{show}</span>
          </span>
          <div className={`arrow ${rotate ? "rotate" : ""}`}></div>
        </div>
        <div
          className="options_container"
          style={{display: rotate ? "flex" : "none"}}
        >
          <span onClick={() => setShow("Africa")}>Africa</span>
          <span onClick={() => setShow("America")}>America</span>
          <span onClick={() => setShow("Asia")}>Asia</span>
          <span onClick={() => setShow("Europe")}>Europe</span>
          <span onClick={() => setShow("Oceania")}>Oceania</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
