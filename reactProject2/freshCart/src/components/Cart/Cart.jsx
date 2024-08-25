import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Audio } from 'react-loader-spinner';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

function Cart() {
    const {getCart,clearCartUser,checkoutSession,setNumOfCartItems,numOfCartItems} =useContext(CartContext);
    const [cartDetails, setCartDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingRemoveCart, setLoadingRemoveCart] = useState(false);

  async  function getUserCart(){
    setLoading(true);
        const {data}= await getCart();
        setLoading(false);
        if(data.statusMsg ==='fail'){
            setCartDetails(null)
        }
        setCartDetails(data);
        console.log(data);
    }

  
   async function clearCart(){
    setLoadingRemoveCart(true)
        const{data}= await clearCartUser();
        setLoadingRemoveCart(false);
        if(data.message==='success'){
            setCartDetails(data);
            setNumOfCartItems(0);
        }
    }
   async function payment(){
        const{data}= await checkoutSession();
        console.log(data);
        if(data.status== 'success'){
           window.open(data.session.url)
        }
    }
    useEffect(() => {
    getUserCart();
    }, [])
if(loading){
    return <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />

}
if(numOfCartItems===0){
    return <h2 className='shadow mt-14  p-8 rounded w-full text-xl font-bold'> Cart Shop <br/>
your cart is empty</h2>

}
if(cartDetails==='null'){
    return <h2 className='shadow mt-14  p-8 rounded w-full text-xl font-bold'  >  Cart Shop <br/>
your cart is empty</h2>

}

   else{
  return (
    <>
    <div className="flex justify-between">
        <h2 className='shadow p-4 rounded'>numOfCartItems:{cartDetails?.numOfCartItems}</h2>
        <button disabled={loadingRemoveCart}
        onClick={clearCart} className='bg-red-600 rounded p-3 text-white'>

{loadingRemoveCart ?(
          <i className='fas fa-spinner fa-spin'></i> ):(
            <>
          clearCart
          <i className='fas fa-trash ms-2'></i>
          </>
           )}
        

        </button>
    </div>
    
    {cartDetails?.data?.products?.map(function(p,index){
        return (
            <Item p={p} key={index} setCartDetails={setCartDetails}/>
        )
    })}
    <div className="flex items-center justify-between">
        <Link to={'/address/' + cartDetails?.data?._id} className='sm-btn'>Next Step</Link>
        {cartDetails?.data?.totalCartPrice}
    </div>
    </>
  )
}
}

export default Cart