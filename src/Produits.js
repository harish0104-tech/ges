import React from 'react'
import Sidebar from './Sidebar'
import './Produits.css'
import { FaSearch } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import data from './data.js'
import { IoCopyOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";

function Product() {
  return (


    <div className="main-container">
      <Sidebar />
      <div className='layout'>
      <div className='navbar'>
        <h1>Produits</h1>
        <div className='buttons'>
        <div className='searchbar'>
          <div className='search-icon'>
            <FaSearch />
          </div>
          <input type='text' placeholder='Recherche' className='search-input' />
        </div>
        <div className='notify'>
          <BiSolidBellRing />
        </div>
        </div>
      </div>
      
      <div className='table-container'>
        <div className='table-header'>
            <h1>Produits</h1>
            <button className='tableheaderbtn'>Nouveau produit</button>
        </div>


        <table >
          <thead>
            <tr>
              <th>Produit</th>
              <th>Ref</th>
              <th>Date de création</th>
              <th>Etat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val, i) =>
                <tr key={i}>
                  <td>{val.Produit}</td>
                 
                  <td><div className='option1'><div>{val.Réf}</div><span><IoCopyOutline /> </span></div></td>
                  <td>{val.Datedecréation}</td>
                  <td ><div className={val.Etat=="Active"?"Green":val.Etat=="Inactive"?"Red":"Blue"}>{val.Etat}</div></td>
                  <td><div className='option'><button>Option</button><span><RiArrowDownSLine /> </span></div></td>

                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Product
