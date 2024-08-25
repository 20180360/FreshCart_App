import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
export default function ChangePass() {
  const naviagte = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const validateScheme = yup.object({
    email: yup
      .string()
      .email("email is invalid")
      .required("email is required "),

    newPassword: yup
      .string()
    //   .matches(passwordRegex, "password is invalid")
      .required("password is required"),
  });

  async function sendNewPassDataToApi(values) {
    setLoading(false);
    try {
      const response = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        values
      );
      //   const { data } = await axios.put(
      //     "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      //     values
      //   );
      if (response.status >= 200 && response.status < 300) {
        // Successful response
        console.log(response.data);
        toast.success("password changed successfully");
        localStorage.removeItem("token");
        naviagte("/home");
        localStorage.setItem("token", response.data.token);
      } else {
        // Non-successful response
        console.error("API Error:", response.data);
        setErrorMsg("Error resetting password. Please try again."); // Set an appropriate error message
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error("Network Error:", error);
      setErrorMsg("Network error. Please try again."); // Set an appropriate error message
    } finally {
      setLoading(false);
    }
  }
  const changePass = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema: validateScheme,
    onSubmit: (values) => {
      console.log(values);
      //send data to api
      sendNewPassDataToApi(values);
    },
  });

  return (
    <div>
      <div className="w-75 m-auto my-4 text-start">
        <h2 className="text-green-600 font-bold text-3xl py-4 ">New password:</h2>
        <form onSubmit={changePass.handleSubmit}>
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email:</label>
          <input
            placeholder="type your email..."
            type="text"
            name="email"
            value={changePass.values.email}
            onChange={changePass.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            id="email"
          />
          {changePass.errors.email && changePass.touched.email ? (
            <div className="alert my-2 py-2 alert-danger">
              {changePass.errors.email}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="newPassword"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"  >newPassword:</label>
          <input
            placeholder="type your new password..."
            type="text"
            name="newPassword"
            value={changePass.values.newPassword}
            onChange={changePass.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            id="newPassword"
          />
          {changePass.errors.newPassword && changePass.touched.newPassword ? (
            <div className="alert my-2 py-2 alert-danger">
              {changePass.errors.newPassword}
            </div>
          ) : (
            ""
          )}

          {errorMsg ? (
            <div className="alert alert-danger my-2 py-2">{errorMsg}</div>
          ) : (
            ""
          )}
          <div className="d-flex  justify-content-between">
            <button
              disabled={!(changePass.isValid && changePass.dirty)}
              className="main-btn mt-5 text-white"
              type="submit"
            >
              {loading ? (
                " Change Password"
              ) : (
                <i className="fa fa-spinner fa-spin"> </i>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




