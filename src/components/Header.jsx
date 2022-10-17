import "../css/Header.css";
import light_mode_logo from "../IMG/light_mode.png";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        <Link to="/" className="header_title_link">
          <span className="header_title">Where in the world?</span>
        </Link>
      </div>
      <div className="appereance_mode_change_container">
        <img
          className="light_mode_logo"
          src={light_mode_logo}
          alt="light_mode"
        />
        <span>Light Mode</span>
      </div>
    </header>
  );
};

export default Header;
