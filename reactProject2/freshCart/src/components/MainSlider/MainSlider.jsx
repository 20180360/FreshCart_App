import React from "react";
import Slider from "react-slick";
import mainSlider_1 from'../../assets/images/slider-image-1.jpeg'
import mainSlider_2 from'../../assets/images/slider-image-2.jpeg'
import mainSlider_3 from'../../assets/images/slider-image-3.jpeg'
function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 3000,
    arrows:false,

  };
  return (
    <div className="flex mb-3">
        <div className="w-3/4">
        <Slider {...settings}>
            <img className="w-full h-[400px] object-cover" src={mainSlider_1} alt="" />
            <img className="w-full h-[400px] object-cover" src={mainSlider_2} alt="" />
            <img className="w-full h-[400px] object-cover" src={mainSlider_3} alt="" />
        </Slider>
        </div>
        <div className="w-1/4">
        <img className="w-full h-[200px] object-cover" src={mainSlider_1} alt="" />
        <img className="w-full h-[200px] object-cover" src={mainSlider_2} alt="" /></div>
    </div>
  
  )
}

export default MainSlider;
