import './ApartmentCards.css'

export function ApartmentCards(props){

    return(
    <div className="card">
        <div className="imagebox">
            <img src={props.src} alt='room images'/>
            <p className="caption">${props.price} : {props.bed}</p>
            <p>{props.address}, {props.zipcode}</p>
        </div>
    </div>
    );
}