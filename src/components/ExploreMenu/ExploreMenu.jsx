import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
// import { food_list } from "../../assets/assets";
// import { assets } from "../../assets/assets";



const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className = "explore-menu-text">
        {" "}
        Choose from a diverse menu featuring a delectable array for dishes
        crafted with the finest ingredients and culinary expertise.Our mission
        is to satisfy your cravings and elevate your dining experience.one
        delicious meal at a time
      </p>
      {/* <div className="image">
            <img src={assets.menu_1} alt=""/>
          <img src={assets.menu_3} alt="" />
          <img src={assets.menu_2} alt=""/>
          <img src={assets.menu_4} alt=""/> 
          <img src={assets.menu_5} alt=""/> 
          <img src={assets.menu_6} alt=""/> 
          <img src={assets.menu_7} alt=""/> 

      </div> */}

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div  onClick={()=>setCategory(prev=>prev===item.menu_name? "All": item.menu_name)} key = {index} className="explore-menu-list-item">
              <img  className ={category=== item.menu_name? "active": ""} src = {item.menu_image} alt = ""  />
              <p className="">{item.menu_name}</p>
            </div>
          );
        })}
        
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
