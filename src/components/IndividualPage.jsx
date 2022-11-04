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
      <div
        className="individual_page_content_container"
        id="individual_page_content_container"
      >
        <div className="individual-flag-container">
          <img
            src={country[0].flags.png}
            alt="individual-flag"
            className="individual-flag"
          />
        </div>
        <div className="individual-flag-content">
          <div>
            <h1 style={{color: mode ? "black" : "white"}}>{country[0].name}</h1>
          </div>
          <div className="individual-flag-des" id="individual-flag-des">
            <div className="des-left">
              <span style={{color: mode ? "black" : "white"}}>
                Native Name: <span id="des-span">{country[0].nativeName}</span>
              </span>
              <span style={{color: mode ? "black" : "white"}}>
                Population: <span id="des-span">{country[0].population}</span>
              </span>
              <span style={{color: mode ? "black" : "white"}}>
                Region: <span id="des-span">{country[0].region}</span>
              </span>
              <span style={{color: mode ? "black" : "white"}}>
                Sub Region: <span id="des-span">{country[0].subregion}</span>
              </span>
              <span style={{color: mode ? "black" : "white"}}>
                Capital: <span id="des-span">{country[0].capital}</span>
              </span>
            </div>
            <div className="des-right">
              <span style={{color: mode ? "black" : "white"}}>
                Top Level Domain:{" "}
                <span id="des-span">{country[0].topLevelDomain}</span>
              </span>
              <span style={{color: mode ? "black" : "white"}}>
                Currencies:{" "}
                {country[0]?.currencies ? country[0]?.currencies.map((item) => {
                  return <span id="des-span">{item.name}</span>;
                }) : <span style={{color: 'red'}}>No Currency</span>}
              </span>
              <div style={{display: "flex", flexDirection: "row"}}>
                <span style={{color: mode ? "black" : "white"}}>
                  Languages:{" "}
                  {country[0].languages.map((item) => {
                    return (
                      <span id="des-span">
                        {item.name}
                        <span> , </span>
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className="border-c-container">
            <span style={{color: mode ? "black" : "white"}}>
              Border Countries:
            </span>
            {
               country[0]?.borders ? country[0]?.borders.map((item) => {
                return (
                  <div style={{background: mode ? "white" : "#161b22"}} className="country-btn">
                    <span style={{color: mode ? "black" : "white"}}>{item}</span>
                  </div>
                )
              }) : <span style={{color: 'red'}}>No Borders</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPage;
