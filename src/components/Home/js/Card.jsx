import { Link } from "react-router-dom";
import "../css/Card.css"; 

function Card({id, title, cover}) {
    return ( 
    <Link to = {`/accomodation/${id}`}>
        <div className="grid-img-container" key={id}>
            <img src={cover} alt={title}/>
        </div>
        <p className="grid-img-title">{title}</p>
    </Link>    
    );
}
export default Card;

  