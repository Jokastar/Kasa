 import Card from "./Card";
 import "../css/LocationGrid.css";
 import { useContext } from "react"; 
import {AccomodationContext} from "../../../App"; 
function LocationGrid() {
    const accomodations = useContext(AccomodationContext);   
    return ( 
    <div className="grid">
        {accomodations.map(accomodation=>{
            return <Card id={accomodation.id} title={accomodation.title} cover={accomodation.cover} key={accomodation.id} />
        })}

    </div>
    );
}
export default LocationGrid;