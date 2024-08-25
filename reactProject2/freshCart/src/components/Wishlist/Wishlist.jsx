import React, { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { Audio } from 'react-loader-spinner';
import WishItem from '../WishItem/WishItem';


function Wishlist() {
  const{getWishlist}=useContext(WishlistContext);
  const [isLoading, setIsLoading] = useState(false);
  const [wishDetails, setWishDetails] = useState(null)

async  function getWishlistCart(){
  setIsLoading(true)
      const {data}= await getWishlist();
      setIsLoading(false)
      if(data?.response?.data?.statusMsg =='fail'){
        setWishDetails(null)
      }
      else{
        setWishDetails(data);
      console.log(data);
      console.log(data.data);
      }
  }

  
  useEffect(() => {
    getWishlistCart();
    }, [])
    if(isLoading){
      return <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
    />
    }
    if(wishDetails?.count===0){
      return <h2 className='shadow mt-14  p-8 rounded w-full text-xl font-bold'> My wish List</h2>
  
  }
  
      if(wishDetails==='null'){
          return <h2 className='shadow mt-14  p-8 rounded w-full text-xl font-bold' > My wish List</h2>
  
      }
  
else{
  return (
  <>
        <h2 className='shadow p-4 rounded w-1/4'>My WishList</h2>
   

  {wishDetails?.data?.map(function(p,index){
    return(
     <WishItem p={p} key={index}  setWishDetails={setWishDetails} getWishlistCart={getWishlistCart}/>
        )
    })}
  </>
  )
}
}
export default Wishlist