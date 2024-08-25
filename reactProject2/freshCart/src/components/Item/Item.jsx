import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';

function Item({setCartDetails,p}) {
    const {deleteItem,updateCount,setNumOfCartItems} =useContext(CartContext);
    const [loadingCount, setLoadingCount] = useState(false)
    const [loadingRemoveItem, setLoadingRemoveItem] = useState(false)
    const [btn, setBtn] = useState('')


    async function updateCountCart(id,count,btn){
        if(count == 0){
            deleteItemFromCart(id);
            return
        }
        setLoadingCount(true);
        setBtn(btn)
        const {data}= await updateCount(id,count);
        setLoadingCount(false);
            if(data.status === 'success')
            setCartDetails(data);
            console.log(data);
        }
async function deleteItemFromCart(pItem){
            setLoadingRemoveItem(true);
                const {data}= await deleteItem(pItem);
                setLoadingRemoveItem(false);
                setNumOfCartItems(data.numOfCartItems)
                setCartDetails(data);
                console.log(data);
            }
  return (
    <>
    <div className='flex items-center gap-3 shadow px-4 my-3'>
            <div className="image">
            <img className='w-30 h-48 object-cover' src={p?.product?.imageCover} alt="" />
            </div>
            <div className='details'>
                <h2>{p?.product?.title}</h2>
                <p className='text-sm text-red-600'>{p.product.category.name}</p>
                <span>{p?.product?.ratingsAverage}
                <i className='fas fa-star text-yellow-600'></i>
            </span> 
            </div>
            <div className='counter ms-auto '>
                <div className="div">
                <button disabled={loadingRemoveItem}
                 onClick={()=>deleteItemFromCart(p.product.id)} className='bg-red-600 rounded p-3 text-white'>
          {loadingRemoveItem ?(
          <i className='fas fa-spinner fa-spin'></i> ):(
            <>
          clearItem
          <i className='fas fa-trash ms-2'></i>
          </>
           )}
  
        </button>
                </div>
               <div className="flex gap-4 items-center mt-2">
               <button disabled={loadingCount}
                onClick={()=>updateCountCart(p.product.id , p.count + 1,'+')} className='sm-btn'>
                  {loadingCount && btn ==='+'? '...' :'+'}
                    </button>
                {p.count}
                <button disabled={loadingCount} onClick={()=>updateCountCart(p.product.id , p.count - 1)} className='sm-btn'>
                {loadingCount && btn ==='-'? '...' :'-'}

                </button>
               </div>
            </div>
        </div>
    </>
  )
}

export default Item