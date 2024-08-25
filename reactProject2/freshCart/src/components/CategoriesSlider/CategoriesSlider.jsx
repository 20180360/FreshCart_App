import React, { useState } from 'react'
import { useEffect } from 'react'
import Style from './CategoriesSlider.module.css'
import Slider from 'react-slick'
import axios from 'axios'
function CategoriesSlider() {
    const [categories, setCategories] = useState([])
    function getCategories(){
      axios.get("https://ecommerce.routemisr.com/api/v1/categories")
      .then(({data})=>{
        setCategories(data.data)
      })
      .catch(err=>{
        console.log(err);
      })
    }
    useEffect(() => {
      getCategories()
    }, [])
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: 3000,
    };
  return (
<>
<Slider {...settings}>
  {categories.map(cat=>
    <>
    <img src={cat.image} className='w-full h-[200px]' alt="" />
    <h3>{cat.name}</h3>
    </>
  

  )}

</Slider>
</>
  )
}

export default CategoriesSlider