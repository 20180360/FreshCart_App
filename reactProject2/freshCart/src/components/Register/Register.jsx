import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Style from './Register.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


function Register() {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const {setToken} =useContext(UserContext)
  async function handleSubmit(values){
    setLoading(true);
    console.log(values);
    try{
      const x= await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",values)
console.log(x);
setLoading(false);
if(x.data.message=='success'){
  localStorage.setItem('token',x.data.token);
  setToken(x.data.token)
  navigate('/')
}
    }catch(err){
      setLoading(false);

      if(err.response.data.message !='fail'){
        setErrorMsg(err.response.data.message)
      }else{
        setErrorMsg( err.response.data.errors.msg);
      }
    }
    }
    const initialValues={
      name:'',
      phone: '',
      password:'',
      rePassword :'',
      email :'',
    }
const validationSchema= Yup.object({
    name: Yup.string().required('name is required').min(5,'must be at least 5 char').max(15,'must be at most 15 char'),
    phone: Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'must be egyptian phone') ,
    password: Yup.string().matches(/.{4,}/).required('pass is required'),
    rePassword : Yup.string().required('pass is required').oneOf([Yup.ref('password')],'must be equal to password'),
    email: Yup.string().email('not valid email').required('email is required') ,
  })

    const formik= useFormik({
      initialValues,
      onSubmit:handleSubmit,
      validationSchema, 
    });
    // console.log(formik.values);
    // console.log(formik.touched);
    // console.log(formik.errors);
  return (
<>
<form onSubmit={formik.handleSubmit} className="max-w-3xl mx-auto">
  <h2 className='my-3 text-3xl text-green-600 font-bold'>Register</h2>
  {errorMsg ? <p>{errorMsg}</p> :null}
  <div className="relative z-0 w-full mb-5 group">
  <input {...formik.getFieldProps('name')}

   type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  {formik.errors.name && formik.touched.name ? formik.errors.name: ''}
</div>
  <div className="relative z-0 w-full mb-5 group">
  <input {...formik.getFieldProps('email')}
 type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  {formik.errors.email && formik.touched.email ? formik.errors.email: ''}

</div>
  <div className="relative z-0 w-full mb-5 group">
  <input {...formik.getFieldProps('password')}
 type="text" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  {formik.errors.password && formik.touched.password ? formik.errors.password: ''}

</div>
  <div className="relative z-0 w-full mb-5 group">
  <input {...formik.getFieldProps('rePassword')}
 type="text" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
  {formik.errors.rePassword && formik.touched.rePassword ? formik.errors.rePassword: ''}

</div>
<div className="relative z-0 w-full mb-5 group">
  <input {...formik.getFieldProps('phone')}
 type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  {formik.errors.phone && formik.touched.phone ? formik.errors.phone: ''}

</div>
<button type="submit" className='main-btn'>{loading? <i className='fas fa-spinner fa-spin'></i>:'submit' }
</button>

  </form>
</>
  );
}

export default Register