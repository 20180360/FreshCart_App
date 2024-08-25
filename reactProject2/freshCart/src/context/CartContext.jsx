import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext=createContext();
export default function CartContextProvider({children}){
    const [numOfCartItems, setNumOfCartItems] = useState(0)
    
    const headers={
        token:localStorage.getItem('token')
    }
    function addProductToCart(productId){
      return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
            productId,
        },{
            headers,
        })
        .then(res=>res)
        .catch(err=>err)
    }
    function getCart(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{headers})
        .then(res=>res)
        .catch(err=>err)
    }
    function deleteItem(pItem){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${pItem}`,{
            headers,
        })
        .then(res=>res)
        .catch(err=>err)

    }
    function clearCartUser(){
        return axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
            headers,
        })
        .then(res=>res)
        .catch(err=>err)
    }
    function updateCount(pId,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`,
            {
            count: count,
        },
        {
            headers,
        })
        .then(res=>res)
        .catch(err=>err)
    }
    function checkoutSession(){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/667625c0ed0dc0016c1d1625?url=http://localhost:5173`,
            {
           shippingAddress:{
        details : "details",
        phone: "01010700999",
        city: "Cairo"
        }
        },
        {
            headers,
        })
        .then(res=>res)
        .catch(err=>err)
    }

    useEffect(() => {
      async function getUserCart(){
         const{data}= await getCart();
         setNumOfCartItems(data.numOfCartItems);
        }
        getUserCart()
        }, [])

   return <CartContext.Provider value={{addProductToCart,getCart,deleteItem,clearCartUser,updateCount,numOfCartItems,setNumOfCartItems,checkoutSession}}>
{children}
    </CartContext.Provider>
}
