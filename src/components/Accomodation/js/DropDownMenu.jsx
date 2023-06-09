import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "../css/DropDownMenu.css"; 
import PropTypes from "prop-types"; 

function DropDownMenu({title, infoList}) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

      return (
        <div className="dropDownMenu">
          <button className="dropDownMenu-btn" onClick={toggleVisibility}>
            <span>{title}</span>
            <FontAwesomeIcon icon={isVisible ? faAngleUp:faAngleDown} />
          </button>
          <div className={`dropDownMenu-content ${isVisible ? 'visible' : ''}`}>
            {Array.isArray(infoList)? infoList.map((info, index) => <p key={20+index}>{info}</p>) : <p key={30} style={{lineHeight: 2}}>{infoList}</p>}
          </div>
        </div>
      );
}
DropDownMenu.propTypes = {
  title:PropTypes.string, 
  infoList:PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.array
  ])

}
export default DropDownMenu;
