import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { setNewPassword} from "../utils/apiFunction";

import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

import { RiLockPasswordFill } from "react-icons/ri";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-toastify";

export const ConfirmPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [password, setPassword] = useState('')
  const [passwordError, setShowPasswordError] = useState(false);

  const [cPassword, setCPassword] = useState('')
  const [cPasswordError, setCPasswordError] = useState(false)

  const [showP, setShowP] = useState(false);
  const [showCP, setShowCP] = useState(false)
  return (
    <>
      <Navbar />

      <div className=" mx-auto signup-form-page page-wrapper">
        <div className=" mt-5 mb-5">
          <div className="container">
            <div className="col-lg-4 col-md-6 col-sm-6 signup-form mx-auto">
              <div className="header">
                <h1>Confirm Password</h1>
              </div>
              <form>
                <div className="input mb-1">
                  <i className="">
                    <RiLockPasswordFill />
                  </i>
                  <input
                    type={showP ? "text" : "password"}
                    placeholder="New Password"
                    name="password"
                    onChange={(event) => {
                        setPassword(event.target.value)
                        const re =
                          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                        const t = re.test(event.target.value);
                        if (t) {
                          setShowPasswordError(false);
                        } else {
                          setShowPasswordError(true);
                        }
                    }}
                    onBlur={() => {
                        const re =
                          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                        const t = re.test(password);
                        if (t) {
                          setShowPasswordError(false);
                        } else {
                          setShowPasswordError(true);
                        }
                      }}
                  />

                  {showP ? (
                    <BiShow
                      className="position-absolute show-hide"
                      onClick={() => {
                        setShowP(!showP);
                      }}
                    />
                  ) : (
                    <BiHide
                      className="position-absolute show-hide"
                      onClick={() => {
                        setShowP(!showP);
                      }}
                    />
                  )}
                </div>
                <div> {passwordError ? (
                    <p className="text-danger text-start">Enter Password</p>
                  ) : null}</div>
                  <div><p className="mb-3 text-start">Password should be <br/>  between 8 to 16 characters<br/>consist of number and special symbols</p></div>
                   
                <div className="input mb-1 mt-4">
                  <i className="">
                    <RiLockPasswordFill />
                  </i>
                  <input
                    type={showCP ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="password"
                    onChange={(event) => {
                        setCPassword(event.target.value)
                    }}
                  />
                  {showCP ? (
                    <BiShow
                      className="position-absolute show-hide"
                      onClick={() => {
                        setShowCP(!showCP);
                      }}
                    />
                  ) : (
                    <BiHide
                      className="position-absolute show-hide"
                      onClick={() => {
                        setShowCP(!showCP);
                      }}
                    />
                  )}
                </div>
                {cPasswordError ? (
                    <p className="text-danger text-start">Enter Confirm Password</p>
                  ) : null}
                <input
                  className="signup-btn btn btn-primary"
                  type="button"
                  value="Set Password"
                  onClick={() => {
                    if (!passwordError && !cPasswordError) {
                        
                        setNewPassword(state?.id, password, cPassword).then((res)=>{
                            if(res?.message == "Password changed successfully"){
                                navigate('/login')
                                toast.success(res?.message)
                            }
                         
                        })
                    }
                    if (password == "") {
                      setShowPasswordError(true);
                    } else {
                      setShowPasswordError(false);
                    }
                    if (cPassword == '') {
                        setCPasswordError(true);
                    } else {
                        setCPasswordError(false);
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
