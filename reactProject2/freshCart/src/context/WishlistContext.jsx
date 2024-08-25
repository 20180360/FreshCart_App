import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toast";

export const WishlistContext=createContext();
export default function WishlistContextProvider({children}){
    const [NumberOfFavourite, setNumberOfFavourite] = useState(0)

    const headers={
        token:localStorage.getItem('token')
    }
    function addProductToWishlist(productId){
        return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
            productId,
          },{
              headers,
          })
          .then(res=>res)
          .catch(err=>err)
      }
      function getWishlist(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',
            {
                headers,

            })
        .then(res=>res)
        .catch(err=>err)
    }
    function clearProduct(wId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${wId}`,{
            headers,
        })
        .then(res=>res)
        .catch(err=>err)
    }
    // useEffect(() => {
    //     async function getWList(){
    //        const{data}= await getWishlist();
    //        setNumberOfFavourite(data);
    //       }
    //       getWList()
    //       }, [])

return <WishlistContext.Provider value={{addProductToWishlist,getWishlist,setNumberOfFavourite,NumberOfFavourite,clearProduct}}>
{children}
</WishlistContext.Provider>
}