import React from "react";

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import ScrollonTop from "./Scroll";
import Produits from "./Produits";
import Utilisateurs from "./Utilisateurs";

function App() {
  return (
    <div className="main" >
      <BrowserRouter>
        <ScrollonTop/>
        <Routes>
          
            <Route path="/" element={<Produits />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
