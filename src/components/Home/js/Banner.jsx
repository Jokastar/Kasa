import "../css/Banner.css";
function Banner({title, backgroundImage}) {
    return (
        <div className="banner-container"  >
                <img src={backgroundImage} alt="img" />
            <h1>{title}</h1>
        </div>
    );
}
export default Banner;