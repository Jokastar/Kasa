import "../css/Header.css"; 
import { Link } from "react-router-dom";
import kasaLogo from "../../../img/kasa-logo.svg"; 

function Header() {
    return ( 
        <header>
          <div className="header">
            <div className="logo-container">
                <Link to="/"><img src={kasaLogo} alt="logo-kasa"/></Link>
            </div>
            <ul className="nav-link">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A propos</Link></li>
            </ul>
          </div>
        </header>
     );
}
export default Header;