
import Banner from "../../Home/js/Banner";
import DropDownMenu from "../../Accomodation/js/DropDownMenu"; 
import "../css/About.css"; 
function About() {
    return (
        <>
        <Banner title="" isHomePage={false}/>
        <div className="about-dropDownMenu">
                <DropDownMenu 
                    title={"Fiabilité"}
                    infoList= "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                 
                 />
                <DropDownMenu 
                    title={"Respect"}
                    infoList="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                 />
                <DropDownMenu 
                    title={"Service"}
                    infoList="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <DropDownMenu 
                    title={"Sécurité"}
                    infoList="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
        </div>
        </>
    );
}

export default About;