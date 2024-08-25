import React, { useContext, useState } from 'react'
import Style from './Product.module.css'
import { Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { CartContext } from '../../context/CartContext'
import { WishlistContext } from '../../context/WishlistContext'
import WishItem from '../WishItem/WishItem'
function Product({p}) {
const [isLoading, setIsLoading] = useState(false);
const [heart, setIsHeart] = useState(false);
const {addProductToCart,setNumOfCartItems} =useContext(CartContext);
const {addProductToWishlist} =useContext(WishlistContext);

async function addProduct(id){
  setIsLoading(true)
  const data= await addProductToCart(id);
  setIsLoading(false)
  console.log(data);
  if(data?.data?.status==='success'){
    toast.success('added')
  }
else{
  toast.error('failed')

}
setNumOfCartItems(data.data.numOfCartItems)
}

async function addToWish(id){
  setIsHeart(true)
  const data=await addProductToWishlist(id)

 if(data?.data?.status==='success'){
   toast.success('Product added successfully to your wishlist')
   console.log(data);
 }
 else{
  toast.error('not added')
}
 }
  
  return (
<>
<div className="w-1/6 p-4">
        <div className="product">
        <Link to={`/productDetails/${p.id}`}>
          <img src={p.imageCover} alt="" />
          <span className='font-thin text-sm text-green-600 block my-3'>{p.category.name}</span>
          <h2>{p.title.split(' ').slice(0,2).join(' ')}</h2>
          <div className="flex justify-between my-3">
            <span>{p.price}</span>
            <span>{p.ratingsAverage}
              <i className='fas fa-star text-yellow-600'></i>
            </span>
          </div>
          </Link>
   <button onClick={() => {
   addToWish(p.id);
}}>
  <i className={`fa-solid fa-heart object-fill ${heart ? 'text-red-500' : ''}`}></i>
</button>

          <button  disabled={isLoading}
          onClick={()=>addProduct(p.id)}  className='btn  bg-main text-white rounded p-1  my-5 w-full'>Add Product</button>
        </div>
        </div>
</>
  )
}

export default Product