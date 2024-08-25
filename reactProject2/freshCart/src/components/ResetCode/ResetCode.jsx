import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
export default function ResetCode() {
  const naviagte = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const validateScheme = yup.object({
    resetCode: yup.string().required("code is required "),
  });
  async function sendCodeDataToApi(values) {
    setLoading(false);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        values
      );
      console.log(data);
      if (data.status == "Success") {
        toast.success(data.status);
        naviagte("/changepass");
      }
    } catch (error) {
      console.error("API Error:", error.data);
      console.error("API Error message:", error.response.data.message);
      setErrorMsg(error.response.data.message);
      setLoading(true);
      const detailedErrors = error.response.data.errors;
      console.log("Detailed Errors:", detailedErrors);
    }
  }
  const codePass = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: validateScheme,
    onSubmit: (values) => {
      console.log(values);
      //send data to api
      sendCodeDataToApi(values);
    },
  });

  return (
    <div>
      <div className="w-75 m-auto my-4 text-start">
        <h2 className="text-green-600 font-bold text-3xl py-4 ">Reset Code:</h2>
        <form onSubmit={codePass.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
          <input
            placeholder="Enter Code..."
            type="text"
            name="resetCode"
            value={codePass.values.resetCode}
            onChange={codePass.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            id="resetCode"
          />
          {codePass.errors.resetCode && codePass.touched.resetCode ? (
            <div className="alert my-2 py-2 alert-danger">
              {codePass.errors.resetCode}
            </div>
          ) : (
            ""
          )}

          <div className="d-flex  justify-content-between">
            <button
              disabled={!(codePass.isValid && codePass.dirty)}
              className="main-btn mt-5  text-white"
              type="submit"
            >
              {loading ? (
                " send code"
              ) : (
                <i className="fa fa-spinner fa-spin"> </i>
              )}
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
