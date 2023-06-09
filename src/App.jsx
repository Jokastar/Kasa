import Home from "./components/Home/js/Home"; 
import Accomodation from "./components/Accomodation/js/Accomodation";
import About from "./components/About/js/About";
import NotFound from "./components/Notfound/js/NotFound";
import Header from "./components/Home/js/Header"
import Footer from "./components/Home/js/Footer";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react"; 
import AccomodationsInfos from "./js/AccomodationsInfos";
import "./App.css";

export const AccomodationContext = createContext(); 

function App() {
    const [accomodations]= useState(AccomodationsInfos);  
    return ( 
        <>
        <AccomodationContext.Provider value = {accomodations}>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/accomodation/:id" element={<Accomodation/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="not-found" element={<NotFound />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer/>
        </AccomodationContext.Provider>     
        </>
     );
}
export default App;
