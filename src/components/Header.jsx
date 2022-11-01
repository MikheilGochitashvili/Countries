import "../css/Header.css";
import light_mode_logo from "../IMG/light_mode.png";
import night_mode_logo from '../IMG/night_mode.png';
import {useNavigate} from "react-router-dom";
const Header = ({mode, setMode}) => {
  const navigate = useNavigate();
  return (
    <header style={{background: mode ? 'white' : '#161b22'}} className="header">
      <div>
          <span style={{color: mode ? '#03031d' : 'white'}} className="header_title" id="header_title" onClick={() => navigate('/Countries')}>Where in the world?</span>
      </div>
      <div className="appereance_mode_change_container" id="border-none" style={{borderBottom: mode ? '1px solid  #03031d' : '1px solid white'}} onClick={() => {
        setMode(!mode)
      }}>
        <img
          className="light_mode_logo"
          src={`${mode ? night_mode_logo : light_mode_logo}`}
          alt="light_mode"
        />
        {mode ? <span style={{color: mode ? '#03031d' : 'white'}}>Night Mode</span> : <span style={{color: mode ? 'black' : 'white'}}>Light Mode</span>}
      </div>
    </header>
  );
};

export default Header;
