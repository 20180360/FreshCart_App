import React, { useState } from 'react'
import { useEffect } from 'react'
import Style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from 'react-slick'
import { Audio } from 'react-loader-spinner'
function ProductDetails() {
  const {id}= useParams();
  function getProductDetails(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(({data})=>{
      setProductDetails(data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
    const [productDetails, setProductDetails] = useState(null)
    useEffect(() => {
      getProductDetails()
    }, [])
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    
if(productDetails==null){
  return <>
   <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />
  </>
}
return(
  <>
  <div className="row">
      <>
      <div className="w-1/4">
      <Slider {...settings} >
        {productDetails.images.map((src,index) =>
          <img key={index} src={src} alt="" />
        )}

      </Slider>
    {/*  */}
    </div>
    <div className="w-3/4 ">
    <div className="px-6">
    <h2>{productDetails.title}</h2>
    <p>{productDetails.description}</p>
    <div className="flex justify-between my-3">
            <span>{productDetails.price}</span>
            <span>{productDetails.ratingsAverage}
              <i className='fas fa-star text-yellow-600'></i>
            </span>
          </div>
          <button className='btn  bg-main text-white rounded p-1  my-5 w-full'>Add Product</button>
    </div>
    </div>
    </>
  </div>
  </>
)
}

export default ProductDetails