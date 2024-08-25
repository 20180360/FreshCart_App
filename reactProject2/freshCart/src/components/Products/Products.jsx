import React, { useState } from 'react'
import Style from './Products.module.css'
import useProducts from '../../hooks/useProducts';
import RecentProducts from '../RecentProducts/RecentProducts';
import ProductDetails from '../ProductDetails/ProductDetails';
function Products() {
  const query=useProducts()
  console.log('fetching products',query?.isFetching);

    if(query.isLoading){
      return <h2>....loading</h2>
    }
    if(query.isError){
      return <h2>{JSON.stringify(query.error)}</h2>
    }
    console.log(query?.data?.data?.data);
    return (
<>
<RecentProducts/>
<ProductDetails/>
</>
  )
}

export default Products