import { useState} from "react";
import"../css/Carousel.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({imageList}) {
    
    const [arrayIndex, setArrayIndex] = useState(0);   

    function prev(){
       setArrayIndex(prevState=>{
        if(prevState <= 0) return imageList.length - 1; 
       return --prevState; 
       })
    }

    function next(){
        setArrayIndex(prevState=>{
            if( prevState >= imageList.length - 1) return 0 ;
            return ++prevState; 
        }); 
    }

    let modal = <dialog>
    {imageList.length > 1 && <div className="prev-btn btn-background" onClick={prev}>
    <FontAwesomeIcon icon={faAngleLeft} />
    </div>}
    
    <div className="img-container">
       <img src={imageList[arrayIndex]} alt="img" />    
    </div>
    <div className="img-index">
        <p>{imageList.length > 1 && `${arrayIndex + 1}/${imageList.length }`}</p>
    </div>
    {imageList.length > 1 && <div className="next-btn btn-background" onClick={next}>
    <FontAwesomeIcon icon={faAngleRight}/>
    </div>}
</dialog>;
    return (modal);
}

export default Carousel;