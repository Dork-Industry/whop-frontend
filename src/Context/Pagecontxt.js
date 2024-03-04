import React, { createContext, useContext, useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import Apiconnect from '../services/Apiconnect.js';

const PgContext = createContext();

export const PageProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItmCount, setcartItmCount] = useState(0);

    const user_typ = localStorage.getItem('user_typ');
    //const user_id =  localStorage.getItem('user_id');

    useEffect(() => {
        getcart();
        setcartItmCount(cartItems.length);
    }, [cartItems]);

    const getcart = async () => {
        //console.log('cart alling');
        if (user_typ && user_typ === 'User') {
            await Apiconnect.postData('product/cart').then((response) => {
                if (response.data.status === 1) {
                    setCartItems(response.data.data);
                    setcartItmCount(response.data.data.length);
                }
            });
        }
    };

    const addToCart = async (product) => {
        if (user_typ && user_typ === 'User') {
            var infoz = {};
            infoz.product_id = product;
            infoz.typ = 'C';
            await Apiconnect.postData('product/cart', infoz).then((response) => {
                if (response.data.status === 1) {
                    //console.log(response);
                    setCartItems(response.data.data);
                    setcartItmCount(response.data.data.length);
                    //console.log(cartItems);

                    toast('Item Added to cart');
                } else {
                    toast('Something went wrong');
                }
            });
        } else {
            toast('Login to continnue');
        }
    };

    return <PgContext.Provider value={{ cartItmCount, cartItems, addToCart }}>{children}</PgContext.Provider>;
};

export const useData = () => {
    return useContext(PgContext);
};
