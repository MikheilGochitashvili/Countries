import "../css/Search.css";
import SearchLogoLight from "../IMG/search_logo.png";
import SearchLogoDark from "../IMG/search_logo_dark.png";
import {useState} from "react";

const Search = ({setSearchQuery, setShow, show, mode}) => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="search_container">
      <div className="search_input_wrapper">
        <img
          src={mode ? SearchLogoDark : SearchLogoLight}
          alt="search_logo"
          className="search_logo"
        />
        <input
          type="search"
          style={{
            background: mode ? "white" : "#161b22",
            color: mode ? "black" : "white",
          }}
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
        <div
          className="menu_dd_button"
          style={{background: mode ? "white" : "#161b22"}}
        >
          <span style={{color: mode ? "black" : "rgb(203 203 203)"}}>
            Filter By Region:{" "}
            <span
              id="show"
              style={{color: mode ? "#3f3f3f" : "rgb(203 203 203"}}
            >
              {show}
            </span>
          </span>
          <div className={`arrow ${rotate ? "rotate" : ""}`}></div>
        </div>
        <div
          className="options_container"
          style={{
            display: rotate ? "flex" : "none",
            background: mode ? "white" : "#161b22",
          }}
        >
          <span
            style={{color: mode ? "black" : "white"}}
            onClick={() => setShow("Africa")}
          >
            Africa
          </span>
          <span
            style={{color: mode ? "black" : "white"}}
            onClick={() => setShow("America")}
          >
            America
          </span>
          <span
            style={{color: mode ? "black" : "white"}}
            onClick={() => setShow("Asia")}
          >
            Asia
          </span>
          <span
            style={{color: mode ? "black" : "white"}}
            onClick={() => setShow("Europe")}
          >
            Europe
          </span>
          <span
            style={{color: mode ? "black" : "white"}}
            onClick={() => setShow("Oceania")}
          >
            Oceania
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
