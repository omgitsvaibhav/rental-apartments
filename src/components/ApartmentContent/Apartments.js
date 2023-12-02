import { ApartmentCards } from "./ApartmentCards";
import "./Apartments.css";
import React from "react";

function Apartments(props) {
  const {apartments} = props;
  return (
    <div className="apartments">
      {apartments.map((apartment) => (
        <ApartmentCards
        key={apartment.id}
          bed={apartment.bed}
          address={apartment.address}
          price={apartment.price}
          zipcode={apartment.zipcode}
          src={apartment.src}
        />
      ))}
    </div>
  );
}

export default Apartments;
