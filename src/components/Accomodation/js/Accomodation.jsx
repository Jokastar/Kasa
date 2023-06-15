
import DropDownMenu from "./DropDownMenu";  
import Carousel from "./Carousel"; 
import { AccomodationContext } from "../../../App";
import { useContext, useState} from "react";
import {useParams, Navigate} from "react-router-dom";
import Ratings from "./Ratings";
import "../css/Accomodation.css"; 


function Accomodation() {
    
    const {id} = useParams();
    const accomodations = useContext(AccomodationContext);
    let isAccomodation = accomodations.find(accomodation => accomodation.id === id);

    const [accomodation] = useState(isAccomodation); 

    if(accomodation === undefined){
        return <Navigate to="/not-found"/>
    }
     
    return (
        <>
        <Carousel imageList={accomodation.pictures}/>
        <div className="accomodation-infos">
            <div className="accomodation-left">
                <h2>{accomodation.title}</h2>
                <p>{accomodation.location}</p>
                <ul className="accomodation-caracteristics">
                    {accomodation.tags.map(tag=><li key={tag}>{tag}</li>)}
                </ul>
            </div>
            <div className="accomodation-right">
                <div className="accomodation-owner">
                    <p>{accomodation.host.name}</p>
                    <div className="owner-img-container">
                        <img src={accomodation.host.picture} alt={accomodation.host.name} />
                    </div>
                </div>
                <Ratings ratings={parseInt(accomodation.rating)}/>
            </div>
        </div>
        <div className="dropDownMenus">
            <DropDownMenu title="Description" infoList={accomodation.description}/>
            <DropDownMenu title="Equipement"  infoList={accomodation.equipments}/>
        </div>
        </>
    );
}

export default Accomodation;