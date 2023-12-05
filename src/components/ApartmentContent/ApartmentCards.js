import "./ApartmentCards.css";

export function ApartmentCards(props) {
  return (
    <div className="card">
      <div className="imagebox">
        <img src={props.src} alt="room images" />
      </div>
      <div className="captionbox">
        <span className="caption">
          ${props.price} : {props.bed}
        </span>
        <p>
          {props.address}, {props.zipcode}
        </p>
      </div>
    </div>
  );
}
