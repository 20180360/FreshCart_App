import React, { useContext, useState } from 'react'
import { toast } from 'react-toast';
import { WishlistContext } from '../../context/WishlistContext';
import { CartContext } from '../../context/CartContext';


function WishItem({p,setWishDetails,getWishlistCart}) {
  const{clearProduct}=useContext(WishlistContext);
  const [removeWishL, setRemoveWishL] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const {addProductToCart,setNumOfCartItems} =useContext(CartContext);


  async function RemoveWishList(wId){
    setRemoveWishL(true)
        const {data}= await clearProduct(wId);
        setRemoveWishL(false);
         setWishDetails(data);
        getWishlistCart();
    }
    async function addProduct(id){
      setAddCart(true)
      const {data}= await addProductToCart(id);
      setAddCart(false);
      setNumOfCartItems(data.numOfCartItems)
      console.log(data);
      if(data?.data?.status==='success'){
        toast.success('added')
      }
    else{
      toast.error('failed')
    
    }
    RemoveWishList(id);

    }
  
  return (
    <>
        <div className="flex items-center gaitem-3 shadow px-4 my-3 justify-between ">

        <div className="image">
          <img src={p.imageCover} alt="" className="w-30 h-48 object-cover" />
        </div>
        <div className='me-auto text-start px-5  '>
                <h2>{p.title}</h2>
                <p className='text-sm text-red-600'>{p.name}</p>
                <p className='text-green-600 text-sm'>{p.price} EGP</p> 
            <button disabled={removeWishL}
        onClick={()=>RemoveWishList(p.id)} className=' rounded text-red-600 text-sm  '>

{removeWishL ?(
 <i className='fas fa-spinner fa-spin'></i>
           ):(
            <>
      <i className='fas fa-trash ms-2'></i>
      Remove
          </>
           )}
        </button>
            </div>
            <button onClick={()=>addProduct(p.id)
             } disabled={addCart}
            className='bg-green-600 p-4 rounded text-white  '>{addCart ?(
              <i className='fas fa-spinner fa-spin'></i>
                        ):(
                         <>
                
                   add To Cart
                       </>
                        )} </button>
        </div>
     
        </>
  )
}

export default WishItem