

import React from 'react';
import Sidebar from './Sidebar';
import './Utilisateurs.css';
import { FaSearch } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import  contact from './contact.js';
import { FaUserTie } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact-container">
      <Sidebar />
      <div className='contact-layout'>
      <div className='contact-navbar'>
        <h1>Utilisateurs</h1>
        <div className='contact-buttons'>
        <div className='contact-searchbar'>
          <div className='contact-searchicon'>
            <FaSearch />
          </div>
          <input type='text' placeholder='Recherche' className='contact-searchinput' />
        </div>
        <div className='contact-notify'>
          <BiSolidBellRing />
        </div>
        </div>
      </div>
      
      <div className='contacttable-container'>
        <div className='contacttable-header'>
            <h1>Utilisateurs</h1>
            <button className='tableheaderbtn'>Nouveau produit</button>
        </div>


        <table className='utilitable'>
          <thead>
            <tr>
              <th>Produts</th>
              <th>Role</th>
              <th>Enterprise</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {
              contact.map((val, i) =>
                <tr key={i}>
                  <td><div className='option1'><span><FaUserTie /> </span><div>{val.Products}</div></div></td>
                  
                 
                  <td><div className='option1'><div>{val.Role}</div><span> </span></div></td>
                  
                  <td className='enterprise-data'>{val.Enterprise}</td>
                  <td><button className='empty-btn'></button></td>

                  

                </tr>
              )
            }
          </tbody>
        </table>
        </div>
      </div> 
      </div>
    
  );
}

export default Contact;
