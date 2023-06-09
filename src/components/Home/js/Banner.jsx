import "../css/Banner.css";
import PropTypes from "prop-types"; 
import HomeBannerImg from "../../../img/banner-img-background.png"; 
import AboutBannerImg from "../../../img/about-banner-img-background.png"; 

function Banner({title, isHomePage}) {
    return (
        <div className="banner-container"  >
                <img src={isHomePage ? HomeBannerImg : AboutBannerImg} alt="img" />
            <h1>{title}</h1>
        </div>
    );
}

Banner.propTypes ={
    title:PropTypes.string, 
    isHomePage: PropTypes.bool
}
export default Banner;