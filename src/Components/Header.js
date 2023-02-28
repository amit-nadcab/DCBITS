import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducer";
import { toast } from "react-toastify";
import {FiMenu} from 'react-icons/fi'

export const Header = () => {
  const { user_id, isLoggedIn } = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <div className="mein-menu">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/img/logo_1.png"
              className="logo"
              alt="logo"
              width="172px"
              height="43px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><FiMenu color="black"/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item px-5">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item px-5">
                    <Link className="nav-link" to="/investHistory">
                      Investment History
                    </Link>
                  </li>
                  <li className="nav-item px-5">
                    <Link className="nav-link" to="/withdrawHistory">
                      Withdraw Histroy
                    </Link>
                  </li>
                  <li className="nav-item px-5">
                    <Link className="nav-link" to="/dashboard">
                      Referral Income
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
            <div className="d-flex">
              <div className="text-dark ">
              <ul className="navbar-nav">
                            {
                                isLoggedIn ?
                                    (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="" onClick={()=> handleLogout()}>Logout</Link>
                                            </li>
                                        </>
                                    )
                                    : (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/signup">SignUp</Link>
                                            </li>
                                        </>
                                    )
                            }

                        </ul>
                {/* <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AiOutlineUser />
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {isLoggedIn ? (
                      <li>
                        <Link
                          class="dropdown-item"
                          to="#"
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </Link>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link class="dropdown-item" to="/login">Login </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/signup"> SignUp </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
