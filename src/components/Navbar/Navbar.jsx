import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar_menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobil-app")}
          className={menu === "mobil-app" ? "active" : ""}
        >
          mobil-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className="Navbar-right">
        <img src={assets.search} alt="" />
        <div className="navbar-search">
          <img src={assets.basket} alt="" />
          <div className="dot"></div>
        </div>

        <button className="navbar-button">sign in</button>
      </div>
      {/* <img src={assets.green} alt="" />
    <img src={assets.white} alt="" />
   
    <img src={assets.remove} alt="" />
    
    <img src={assets.cross} alt="" />
    <img src={assets.ma} alt=""navbar_menu />
    <img src={assets.logout} alt="" />
    <img src={assets.bag} alt="" />
    <img src={assets.facebook} alt="" />
    <img src={assets.linkedin} alt="" />
    <img src={assets.parcel} alt="" />
    <img src={assets.selector} alt="" />
    <img src={assets.twitter} alt="" />
    <img src={assets.rating} alt="" />
    <img src={assets.pic1} alt="" />
    <img src={assets.pic2} alt="" />
    <img src={assets.pic3} alt="" />
    <img src={assets.pic4} alt="" />
    <img src={assets.pic5} alt="" /> 
    <img src={assets.pic6} alt="" />
    <img src={assets.pic7} alt="" />
    <img src={assets.pic8} alt="" />
    <img src={assets.pic9} alt="" />
    <img src={assets.pic10} alt="" />
    <img src={assets.pic11} alt="" />
    <img src={assets.pic12} alt="" />
    <img src={assets.pic13} alt="" />
    <img src={assets.pic15} alt="" />
    <img src={assets.pic16} alt="" />
    <img src={assets.pic17} alt="" />
    <img src={assets.pic18} alt="" />
    <img src={assets.pic19} alt="" />
    <img src={assets.pic20} alt="" />
    <img src={assets.pic21} alt="" />
    <img src={assets.header} alt="" />
    <img src={assets.pic23} alt="" />
    
    <img src={assets.pic25} alt="" />
    <img src={assets.pic26} alt="" /> 
    <img src={assets.pic27} alt=""/>
    <img src={assets.pic28} alt=""/>
    <img src={assets.pic29} alt=""/>
    <img src={assets.pic30} alt=""/> */}




    
    </div>
  );
};

export default Navbar;
