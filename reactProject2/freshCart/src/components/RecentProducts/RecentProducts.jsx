import React, { useContext, useState } from 'react'
import Style from './RecentProducts.module.css'
import useProducts from '../../hooks/useProducts'
import { Audio } from 'react-loader-spinner'
import Product from '../Product/Product'
function RecentProducts() {
  const {isLoading,isError,error,isFetching,data}=useProducts();
  if(isLoading){
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
  if(isError){
    return <h2>{JSON.stringify(error)}</h2>
  }
  console.log('fetching recent products',isFetching);
    return(
      <>
      <div className="row">
        {data?.data?.data?.map((p,index)=>
        <>
         <Product p={p} key={index}></Product>
      
         </>
        )}
      </div>
      </>
    )
    }
 

export default RecentProducts