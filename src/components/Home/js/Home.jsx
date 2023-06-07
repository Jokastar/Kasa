import Header from "./Header";
import LocationGrid from "./LocationGrid";
import Footer from "./Footer";
import Banner from "./Banner"; 

function Home() {
    return (
        <>
          <Header/>
          <Banner title="Chez vous, partout et ailleurs" backgroundImage={window.location.origin + "/img/banner-img-background.png"}/>
          <LocationGrid/>
          <Footer/>
        </>
    );
}

export default Home;