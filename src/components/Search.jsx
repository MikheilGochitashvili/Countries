import "../css/Search.css";
import SearchLogo from "../IMG/search_logo.png";
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Search = ({search, setSearch}) => {
  const [show, setShow] = useState('Filter By Region')
  const [rotate, setRotate] = useState(false)
  const Show = (e) => {
    setShow(e)
  }
  return (
    <div className="search_container">
      <div className="search_input_wrapper">
        <img src={SearchLogo} alt="search_logo" className="search_logo" />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
          className="search_input"
          placeholder="Search for a country..."
        />
      </div>
      <div className="menu_dropdown_container" onClick={() => {
        setRotate(!rotate)
      }}>
        <div className="menu_dd_button">
          <span>{show}</span>
          <div className={`arrow ${rotate ? 'rotate' : ''}`}>
          </div>
        </div>
        <div className="options_contaienr" style={{display: rotate ? 'flex' : 'none'}}>
          <Link to="/Africa"><span onClick={() => {
            Show('Africa')
          }}>Africa</span></Link>
          <Link to="America"><span onClick={() => {
            Show('America')
          }}>America</span></Link>
          <Link to="Asia"><span onClick={() => {
            Show('Asia')
          }}>Asia</span></Link>
          <Link to="Europe"><span onClick={() => {
            Show('Europe')
          }}>Europe</span></Link>
          <Link to="/Oceania"><span onClick={() => {
            Show('Oceania')
          }}>Oceania</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
