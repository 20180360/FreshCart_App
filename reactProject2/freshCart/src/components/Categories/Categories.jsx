import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

function Categories() {
  const [categoriesDetails, setCategoriesDetails] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

  useEffect(() => {
    getAllCategories();
  }, []);

  function getAllCategories() {
    axios
      .get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(({ data }) => {
        console.log(data.metadata);
        console.log(data.data);
        setCategoriesDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    setSelectedCategoryName(category.name);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories/${category._id}/subcategories`)
      .then(({ data }) => {
        console.log(data);
        setSubcategories(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!categoriesDetails) {
    return<Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />
  }

  return (
    <>
      <div className="py-7">
        <div className="grid grid-cols-3 gap-4">
          {categoriesDetails.data?.map((category) => (
            <div
              key={category._id}
              className="border-slate-100 border-2 rounded category category:hover"
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.image} className="w-full h-[300px] object-cover" />
              <p className="text-center text-green-600 p-6 text-2xl font-bold">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <>
      <h2 className='text-center text-green-600 py-8 text-3xl font-bold '>{selectedCategoryName} Subcategories</h2>

        <div className="grid grid-cols-3 gap-4">
          {subcategories.map((subcategory) => (
            <div className="border-slate-100 border-2 rounded category category:hover p-5 text-center">
            <div key={subcategory._id}>
              <p className='text-lg font-semibold'>{subcategory.name}</p>
              </div>
            </div>
          ))}
        </div>
        </>
      )}
    </>
  );
}

export default Categories;