import "../css/Header.css"; 
import { Link } from "react-router-dom";
import kasaLogo from "../../../img/kasa-logo.svg"; 
import {useRef} from "react"; 

function Header() {
  const navLinkRefs = useRef([]); 
  
  function handleClick(e){
   navLinkRefs.current.forEach(li => li.classList.remove("active")); 
   e.target.classList.add("active"); 
  }

  function handleClickLogo(){
    navLinkRefs.current.forEach((a) => {
      if(a.textContent === "A propos"){ 
        a.classList.remove("active"); 
        return; 
      }
     
      if(a.classList.contains("active"))return; 

      a.classList.add("active"); 
    });

  }
    return ( 
        <header>
          <div className="header">
            <div className="logo-container">
                <Link to="/" onClick={handleClickLogo}><img src={kasaLogo} alt="logo-kasa" /></Link>
            </div>
            <ul className="nav-link">
                <li><Link to="/"
                       ref={(element) => (navLinkRefs.current[0] = element)}
                       onClick={handleClick}>
                       Accueil
                    </Link>
               </li>
                <li><Link to="/about" 
                          ref={(element) => (navLinkRefs.current[1] = element)}
                          onClick={handleClick}>
                          A propos
                    </Link>
                </li>
            </ul>
          </div>
        </header>
     );
}
export default Header;