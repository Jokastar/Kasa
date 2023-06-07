import "../css/Footer.css"; 

function Footer() {
    return (
        <footer>
            <img src={window.location.origin  + "/img/kasa-logo-white.svg"} alt="kasa-logo-white"/>
            <p>@2020 Kasa.All rights reserved</p>
        </footer>
    );
}

export default Footer;