import "../css/Card.css";

const Card = (props) => {
  return (
    <div className="card_container">
      <div className="flag_container">
        <img src={props.img} alt="klm" className="country_flag_img" />
      </div>
      <div className="flag_description">
        <h4 className="flag_name">{props.name}</h4>
        <div className="description_container">
          <span className="description_span">
            Population:{" "}
            <span className="description_display">{props.population}</span>
          </span>
          <span className="description_span">
            Region: <span className="description_display">{props.region}</span>
          </span>
          <span className="description_span">
            Capital:{" "}
            <span className="description_display">{props.capital}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
