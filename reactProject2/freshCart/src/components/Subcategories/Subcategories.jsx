import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Categories from '../Categories/Categories';

function Subcategories() {
      const [subcategories, setSubCategories] = useState();
      const{catId}=useParams()
console.log(catId);
     function getSubCategories(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${catId}/subcategories`)
       .then(({data})=>{
         console.log(data);
         setSubCategories(data)
       })
       .catch((err)=>{
         console.log(err);
       })
     }
      useEffect(() => {
        
        getSubCategories()
      },[catId])
      

      if(subcategories==null){
        return <>
        ....loading
        </>
      }
  return (
    <>
      <div className="grid grid-cols-3 gap-4 ">
      
      {subcategories.data?.map((subcategory) => (
          <div key={subcategory._id}>
            <p>{subcategory.name}</p>
          </div>
        ))}
      </div>
 
    </>
  )
}

export default Subcategories