import { createContext } from "react";
// import { food_list } from "../assets/assets.js";
 import food_list from "../assets/foods_list";

export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {



    const contextValue={
        food_list
    }

    
    return(
        <StoreContext.Provider  value={contextValue}>{
            props.children}
        </StoreContext.Provider>
    
    );
};


export default StoreContextProvider