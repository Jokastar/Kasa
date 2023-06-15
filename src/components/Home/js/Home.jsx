
import LocationGrid from "./LocationGrid";
import Footer from "./Footer";
import Banner from "./Banner"; 

function Home() {
    return (
        <>
          <Banner title="Chez vous, partout et ailleurs" isHomePage={true}/>
          <LocationGrid/>
        </>
    );
}

export default Home;