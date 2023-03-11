import React, { useState } from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {verifyForgetPasswordOtp} from '../utils/apiFunction'

import { setIsLoggedIn } from "../redux/reducer";
import { forgetPasswordEmail } from "../utils/apiFunction";

import { MdEmail, MdPassword } from "react-icons/md";
import {ImSpinner7} from 'react-icons/im'
import { toast } from "react-toastify";

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);

  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false);

  const [showOTP, setShowOTP] = useState(false)
 

  return (
    <>
      <Navbar />

      <div className=" mx-auto signup-form-page page-wrapper">
        <div className=" mt-5 mb-5">
          <div className="container">
            <div className="col-lg-4 col-md-6 col-sm-6 signup-form mx-auto">
              <div className="header">
                <h1>Forget Password</h1>
              </div>
              <form>
                <div className="input mb-2">
                  <i className="">
                    <MdEmail />
                  </i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      const re =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                      const t = re.test(event.target.value);
                      if (t) {
                        setShowEmailError(false);
                      } else {
                        setShowEmailError(true);
                      }
                    }}
                    onBlur={() => {
                      const re =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                      const t = re.test(email);
                      if (t) {
                        setShowEmailError(false);
                      } else {
                        setShowEmailError(true);
                      }
                    }}
                  />
                </div>
                {showEmailError ? (
                  <div>
                    <p className="text-danger text-start">Enter Valid Email</p>
                  </div>
                ) : null}
                {
                    showOTP ?   <div className="input mb-2">
                    <i className="">
                      <MdPassword/>
                    </i>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      name="otp"
                      onChange={(event) => {
                          setOtp(event.target.value)
                          if(event.target.value.length >=6){
                            setOtpError(false)
                          }
                      }
                  }
                      // onBlur={() => {
                      //   const re =
                      //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                      //   const t = re.test(email);
                      //   if (t) {
                      //     setShowEmailError(false);
                      //   } else {
                      //     setShowEmailError(true);
                      //   }
                      // }}
                    />
                  </div> : null
                }
                {otpError ? (
                  <div>
                    <p className="text-danger text-start">Enter Valid OTP</p>
                  </div>
                ) : null}
              
                <input
                  className="signup-btn btn btn-primary"
                  type="button"
                  value={showOTP ? "Verify OTP" : "Send OTP"}
                  onClick={() => {
                    if(!showOTP){
                        if (email) {
                            console.log("called");
                            forgetPasswordEmail(email).then((res) => {
                              console.log(res);
                              console.log(res?.message);
                              if (res?.message === "Email sent successfully") {
                                toast.info(res?.message);
                                setShowOTP(true)
                              } else {
                                toast.error(res?.message);
                              }
                            });
                          }
                          if (email === "") {
                            toast.error("Enter Email ");
                          }
                    }
                    if(showOTP){
                      if(otp == ''){
                        setOtpError(true)
                      }else{
                        verifyForgetPasswordOtp(email, otp).then((res)=>{
                          console.log(res,"response");
                          if(res?.message === "OTP verified"){
                              toast.success(res?.message)
                              navigate('/confirmPassword',{state:{id: res?.user_data?.user_id}})
                          }
                        })
                      }
                    }
                   
                  }}
                />
              </form>
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary">
                  sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
