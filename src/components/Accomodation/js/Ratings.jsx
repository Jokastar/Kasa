
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import "../css/Ratings.css"; 

function Ratings({ratings}){
   const ratingsHtml = [];
   const ratingsLenght = 5;
   for(let i = 0; i < ratings; i++){
    ratingsHtml.push(<li key={i}><FontAwesomeIcon icon={faStar} style={{color: "#FF6060"}} /></li>)
   }
   for(let i = 0; i < ratingsLenght - ratings; i++){
    ratingsHtml.push(<li key={i+10}><FontAwesomeIcon icon={faStar} style={{color: "#dbdbdb"}} /></li>)

   }
    return (
        <ul className="accomodation-ratings">
            {ratingsHtml}
        </ul>
    );
}

export default Ratings;