import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addtoCart = (itemId) => {
        setCartItems((prevItems) => ({
            ...prevItems,
            [itemId]: (prevItems[itemId] || 0) + 1 // Increment the count or set it to 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            if (newItems[itemId] > 0) {
                newItems[itemId] -= 1; // Decrement the count
                if (newItems[itemId] === 0) {
                    delete newItems[itemId]; // Remove item if count is 0
                }
            }
            return newItems;
        });
    };


    const getTotal = () => {
        let totalAmout = 0;
        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) =>
                    product._id === item
                );
                totalAmout += itemInfo.price * cartItems[item];
            }

        }
        return totalAmout;
    }

    const contextValue = {
        food_list,
        cartItems,
        addtoCart,
        removeFromCart,
        getTotal
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider