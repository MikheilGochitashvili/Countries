import "../css/Card.css";
import {useNavigate} from "react-router-dom";
const Card = (props) => {
  const location = useNavigate();
  return (
    <div
      className="card_container" id="card_container"
      style={{background: props.mode ? "white" : "#161b22"}}
      onClick={() => location(`/${props.name}`)}
    >
      <div className="flag_container">
        <img src={props.img} alt="klm" className="country_flag_img" />
      </div>
      <div className="flag_description" id="flag_description">
        <h4
          className="flag_name" id="flag_name"
          style={{color: props.mode ? "black" : "white"}}
        >
          {props.name}
        </h4>
        <div className="description_container">
          <span
            className="description_span" id="description_span"
            style={{color: props.mode ? "black" : "white"}}
          >
            Population:{" "}
            <span
              className="description_display" v
              style={{color: props.mode ? "grey" : "rgba(255, 255, 255, 0.59)"}}
            >
              {props.population}
            </span>
          </span>
          <span
            className="description_span" id="description_span"
            style={{color: props.mode ? "black" : "white"}}
          >
            Region:{" "}
            <span
              className="description_display" id="description_display"
              style={{color: props.mode ? "grey" : "rgba(255, 255, 255, 0.59)"}}
            >
              {props.region}
            </span>
          </span>
          <span
            className="description_span" id="description_span"
            style={{color: props.mode ? "black" : "white"}}
          >
            Capital:{" "}
            <span
              className="description_display" id="description_display"
              style={{color: props.mode ? "grey" : "rgba(255, 255, 255, 0.59)"}}
            >
              {props.capital}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
