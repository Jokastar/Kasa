import "../css/Footer.css"; 
import kasaLogoWhite from "../../../img/kasa-logo-white.svg"

function Footer() {
    return (
        <footer>
            <img src={kasaLogoWhite} alt="kasa-logo-white"/>
            <p>@2020 Kasa.All rights reserved</p>
        </footer>
    );
}

export default Footer;