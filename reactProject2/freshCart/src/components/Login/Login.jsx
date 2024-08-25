import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from'yup'
import { UserContext } from '../../context/UserContext';
function Login() {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const{setToken} =useContext(UserContext)
  function handleSubmit(values){
    setLoading(true);
    console.log(values);
     axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",values)
  .then((data)=>{
    setLoading(false);
    if(data.data.message=='success'){
      setToken(data.data.token)
      localStorage.setItem('token',data.data.token);
      navigate('./home')
        }
  })
   

.catch((err)=>{
  setLoading(false);
  setErrorMsg('pass or email incorrect');
});
    }
    const initialValues={
      password:'',
      email :'',
    }
const validationSchema= Yup.object({
    password: Yup.string().matches(/.{4,}/).required('pass is required'),
    email: Yup.string().email('not valid email').required('email is required') ,
  })

    const loginForm= useFormik({
      initialValues,
      onSubmit:handleSubmit,
      validationSchema, 
    });
    // console.log(formik.values);
    // console.log(formik.touched);
    // console.log(formik.errors);
  return (
<>
<form onSubmit={loginForm.handleSubmit} className="max-w-3xl mx-auto">
  <h2 className='my-3 text-3xl text-green-600 font-bold'>login</h2>
  {errorMsg ? <p>{errorMsg}</p> :null}
  <div className="relative z-0 w-full mb-5 group">
  <input {...loginForm.getFieldProps('email')}
 type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  {loginForm.errors.email && loginForm.touched.email ? loginForm.errors.email: ''}

</div>
  <div className="relative z-0 w-full mb-5 group">
  <input {...loginForm.getFieldProps('password')}
 type="text" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  {loginForm.errors.password && loginForm.touched.password ? loginForm.errors.password: ''}

</div>

<button type="submit" className='main-btn'>{loading? <i className='fas fa-spinner fa-spin'></i>:'submit' }
</button>
<Link to={"/forgetpass"} className="fs-5 text-main">
              Forgot Password?
            </Link>
  </form>
</>
  );
}

export default Login