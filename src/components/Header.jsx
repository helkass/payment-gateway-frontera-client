import React, { useState } from "react";
import "./styles/header.css";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";

const Header = () => {
   const [active, setActive] = useState(false);

   const handleActive = () => {
      setActive(!active);
   };
   return (
      <header>
         <div className="container header-container">
            <Link to="/">
               <h5>
                  Payment<span>Frontera</span>
               </h5>
            </Link>
            <nav className={`nav ${active && "active"}`}>
               <Link to={"/docs"}>docs</Link>
               <a
                  target="_blank"
                  href="https://github.com/helkass/payment-gateway-frontera">
                  github
               </a>
               <a
                  target="_blank"
                  href="https://github.com/helkass/payment-gateway-frontera">
                  buy me a coffee
               </a>
            </nav>
            <button onClick={handleActive} className="btn-bars">
               <HiBars3BottomRight size={22} />
            </button>
         </div>
      </header>
   );
};

export default Header;
