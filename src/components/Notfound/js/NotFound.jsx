import { Link } from "react-router-dom";
import "../css/NotFound.css"; 
function NotFound() {
    return (
        <>
            <div className="not-found-text">
                <div className="class404">
                <h1>404</h1>
                <p>Oups! La page que vous cherchiez n'existe pas.</p>
                </div>
                <Link to="/"><p className="link">Retour à la page d'acceuil</p></Link>
            </div>
        </>
    );
}

export default NotFound;