import Header from "./Header";
import LocationGrid from "./LocationGrid";
import Footer from "./Footer";
import Banner from "./Banner"; 

function Home() {
    return (
        <>
          <Header/>
          <Banner title="Chez vous, partout et ailleurs" isHomePage={true}/>
          <LocationGrid/>
          <Footer/>
        </>
    );
}

export default Home;