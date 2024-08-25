import React, { useState } from "react";
import { useEffect } from "react";
import Style from "./Brands.module.css";
import axios from "axios";
function Brands() {
  const [brandsDetails, setBrandsDetails] = useState();
  const [selectedBrand, setSelectedBrand] = useState(null);

  function getAllBrands() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/brands")
      .then(({data}) => {
        console.log(data);
        setBrandsDetails(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllBrands();
  }, []);
  if (!brandsDetails) {
    return <div>...loading</div>;
  }
  // function handleBrandClick(brand) {
  //   if (!selectedBrand) {
  //     setSelectedBrand(brand);
  //   }
  // }
  function handleBrandClick(brand) {
    setSelectedBrand(brand);
  }

  function closeModal() {
      setSelectedBrand(null);
  }

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  const  handleModalClick= () => {
    closeModal();
  };
  return (
    <>
      <div className="py-7">
        <div className="grid grid-cols-4 gap-4">

        {brandsDetails.data.map((item)=>
    <>
   
    <div className=" border-slate-100 border-2 rounded category category:hover " key={item._id}
                  onClick={() => handleBrandClick(item)}
>
    <img src={item.image} className='w-full h-[150px] object-contain '
                    />

    <p className='text-center  p-6 '>{item.name}</p>
    </div>
  </>
     ) }
    
        </div>
      </div>

      {selectedBrand && (
              <div className={Style.modal} onClick= {handleModalClick}>

      <div className="relative  bg-white   h-1/2 rounded " onClick={handleImageClick}>
        <span className='absolute flex top-0 end-0 ' onClick={closeModal}>
        <i class="fa-solid fa-xmark cursor-pointer p-2 text-xl"></i>        
        </span>
        {/* <div className="flex justify-end">

        </div> */}

        <div className="grid grid-cols-2 my-10  border-slate-200 border-2">
        <div className="m-auto">
       <h2 className="text-green-600 text-4xl font-bold " >{selectedBrand.name}</h2>
       <p>{selectedBrand.slug}</p>
       </div>
  
        <img src={selectedBrand.image} alt={selectedBrand.name} 
/>

        </div>
        <button  className= {Style.closeButton} onClick={closeModal}>close</button>
      </div>
  
    </div>
  )}
</>
);
}
 

export default Brands;










