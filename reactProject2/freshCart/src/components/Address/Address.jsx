import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";

function Address() {
  const {cartId}=useParams();
  console.log(cartId);
const formik=  useFormik({
    initialValues:{
      shippingAddress:{
        details: "",
        phone: "",
        city: ""
        }
    },
    onSubmit: function(data){
      console.log(data);
      checkoutSession(data)
    }

  })
  function checkoutSession(data){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
      data,
    {
      headers:{
        token: localStorage.getItem('token')
      }

    })
    .then(r=>{console.log(r);
      window.open(r.data.session.url,'_self')
    })
    .catch(e=>{console.log(e);})
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-green-600 pb-4">Address Form</h2>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="shippingAddress.city"
          id="city"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          {...formik.getFieldProps('city')}
        />
        <label
          htmlFor="city"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            City
        </label>
        
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          name="shippingAddress.phone"
          id="phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          {...formik.getFieldProps('phone')}
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone
        </label>
        
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="shippingAddress.details"
          id="details"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          {...formik.getFieldProps('details')}
        />
        <label
          htmlFor="details"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Details
        </label>
        
      </div>
      <button type="submit" className="main-btn">Payment</button>
    </form>
  );
}

export default Address;
