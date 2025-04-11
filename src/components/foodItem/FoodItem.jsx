// import React from 'react';
// import "./FoodItem.css"
// // FoodItem.jsx
// import { assets } from './assets';  



// const FoodItem = ({id, name, price, description, image}) => {



//   return (
//     <div className="food-item">
//        <div className="food-item-img-container">
//           <img  className="food-item-image" src={image} alt="" />
//        </div>

//        <div className="food-item-info">
//        <div className="food-item-name-rating"> 
        
//         <p>{name}</p>
//         <img src={assets.rating_starts} alt="" />
//         </div>
//        </div>
//      <p className="desc">{description}</p>
//      <p className="food-item-price">${price}</p>
//     </div>
//   )
// }

// export default FoodItem


import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; 
// import add_icon_white from '../assets/add_icon_white.png';
// import remove_icon_red from '../assets/remove_icon_red.png';
// import add_icon_green from '../assets/add_icon_green.jpeg';


const FoodItem = ({ id, name, price, description, image }) => {

  const [itemCount, setItemCount] = useState(0);


  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount
         ?<img  className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=''/>
         :<div className='food-item-counter'>
            <img onClick={()=> setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=''/>
            <p>{itemCount}</p>
            <img  onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
         </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
        <p className="food-name">{name}</p>
          <img src={assets.rating_stars} alt="" className='rating-stars' />⭐⭐⭐⭐
        </div>
      </div>

      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;
