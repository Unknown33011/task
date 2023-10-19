import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <p className="navbar_list__item_logo">Uamesha Ramanay</p>
        <ul className="navbar_list">
          <li className="navbar_list__item">Home</li>
          <li className="navbar_list__item">About</li>
          <li className="navbar_list__item">Service</li>
          <li className="navbar_list__item">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
