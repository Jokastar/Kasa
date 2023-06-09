import { Link } from "react-router-dom";
import "../css/Card.css"; 
import PropTypes from "prop-types"; 

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

Card.propTypes = {
    title:PropTypes.string.isRequired,
    cover:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}
export default Card;

  