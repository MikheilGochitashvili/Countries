import {useParams} from "react-router-dom";
import data from "../countries.json";
import "../css/Individual.css";
import Arrow from "../IMG/arrow.png";
import ArrowLight from "../IMG/arrow_light.png";
import {useNavigate} from "react-router-dom";

const IndividualPage = ({mode}) => {
  const navigate = useNavigate();
  const {name} = useParams();
  const country = data.filter((item) => item.name === name);
  console.log(country);
  return (
    <div
      className="individual-page-container"
      style={{background: mode ? "rgb(234, 234, 234)" : "#010409"}}
    >
      <div className="individual-page-header">
        <div
          className="go_back_btn"
          style={{background: mode ? "white" : "#161b22"}}
          onClick={() => {
            navigate("/Countries");
          }}
        >
          <img src={mode ? Arrow : ArrowLight} alt="arrow" id="arrow" />
          <span style={{color: mode ? "#161B22" : "#fff"}}>Back</span>
        </div>
      </div>
      <div className="individual_page_content_container">
          <div className="individual-flag-container">
            <img src={country[0].flags.png} alt="individual-flag" className="individual-flag"/>
          </div>
          <div className="individual-flag-content">
            
          </div>
      </div>
    </div>
  );
};

export default IndividualPage;
