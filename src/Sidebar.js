import React from 'react'
import '../src/Sidebar.css'
import  { useState } from 'react';
import GESImage from './Assets/Images/Logo.png';
import Avatar from './Assets/Images/Avatar.png';
import { PiArrowDown } from "react-icons/pi";
import { PiArrowRightLight } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { FcSettings } from "react-icons/fc";
function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div className="main-content">
      <div className="sidebar">
        <img src={GESImage} alt="GES Logo" className="logo-image" />
        <img src={Avatar} alt="User avatar" className="avatar" />
        <h4>Nom Prénom</h4>
        <h5>Admin</h5>

        <div className="menu-section">
          <div className="menu-item">
            <span onClick={toggleSubmenu} className="menu-title">{isOpen ? <PiArrowDown />:<PiArrowRightLight />} Dashboard</span>
            {isOpen && (
              <ul className="submenu">
                <li>Partenaires</li>
                <li>Produits</li>
                <li>Anomalie</li>
                <li>SAV</li>
                <li>Finance</li>
              </ul>
            )}
          </div>

          <div className="menu-item"><PiArrowRightLight /> Clients</div>
          <div className="menu-item"><PiArrowRightLight /> Calendrier</div>
          <div className="menu-item"><PiArrowRightLight /> Partenaires</div>
          <div className="menu-item"><PiArrowRightLight /> Utilisateurs</div>
          <div className="menu-item"><PiArrowRightLight /> Paramétrages</div>
        </div>

        <div className="logout-section">
          <IoExitOutline />
          <p>Se déconnecter</p>
          <FcSettings />
        </div>






      </div>



    </div>
  )
}

export default Sidebar
