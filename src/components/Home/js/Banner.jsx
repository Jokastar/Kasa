import "../css/Banner.css";
import PropTypes from "prop-types"; 

function Banner({title, backgroundImage}) {
    return (
        <div className="banner-container"  >
                <img src={backgroundImage} alt="img" />
            <h1>{title}</h1>
        </div>
    );
}

Banner.propTypes ={
    title:PropTypes.string, 
    backgroundImage: PropTypes.string
}
export default Banner;