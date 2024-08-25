import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
export default function ForgetPass() {
  const naviagte = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const validateScheme = Yup.object({
    email: Yup
      .string()
      .email("email is invalid")
      .required("email is required "),
  });
  async function forgotPassDataToApi(values) {
    setLoading(false);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        values
      );
      console.log(data);
      if (data.statusMsg == "success") {
        toast.success(data.message);
        naviagte("/resetcode");
      }
    } catch (error) {
      console.error("API Error:", error.response.data);
      console.error("API Error message:", error.response.data.message);
      setErrorMsg(error.response.data.message);
      setLoading(true);
      const detailedErrors = error.response.data.errors;
      console.log("Detailed Errors:", detailedErrors);
    }
  }
  const forgetPass = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validateScheme,
    onSubmit: (values) => {
      console.log(values);
      //send data to api
      forgotPassDataToApi(values);
    },
  });

  return (
   <>
      <div className="w-75 m-auto my-4 text-start">
        <h2 className="text-green-600 font-bold text-3xl py-4 ">please enter your verification code</h2>
        <form onSubmit={forgetPass.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
  <input {...forgetPass.getFieldProps('email')}
 type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  {forgetPass.errors.email && forgetPass.touched.email ? forgetPass.errors.email: ''}

</div>
        

          <div className="d-flex  justify-content-between">
            <button
              disabled={!(forgetPass.isValid && forgetPass.dirty)}
              className="main-btn text-white"
              type="submit"
            >
              {loading ? (
                " send code"
              ) : (
                <i className="fa fa-spinner fa-spin"> </i>
              )}
            </button>
          </div>
          <div></div>
        </form>
      </div>
      </>
  );
}