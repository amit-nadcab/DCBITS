import React, { useState } from "react";
import { Link, useNavigate, NavLink} from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducer";
import { toast } from "react-toastify";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import {RiLogoutBoxRFill} from 'react-icons/ri'
import { Footer } from "./Footer";

export const Header = () => {
  const { user_id, isLoggedIn } = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(true);
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <div className="mein-menu">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
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
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icona">
              {menu ? (
                <FiMenu color="black" onClick={() => setMenu(false)} />
              ) : (
                <RxCross2 color="black" onClick={() => setMenu(true)} />
              )}
            </div>
          </button>

          <div
            className="offcanvas offcanvas-bottom offcanvas-mobile"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header offcanvas-head">
              <Link className="navbar-brand" to="/home">
                <img
                  src="assets/img/logo_1.png"
                  className="logo"
                  alt="logo"
                  width="172px"
                  height="43px"
                />
              </Link>
              <button
                type="button"
                id="offcanvasBottom"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => setMenu(true)}
              ></button>
            </div>
            <div className="offcanvas-body small offcanvas-custom-body px-0">
              {window.innerWidth < 500 ? (
                <p className="text-center mb-4 menu-text">MENU</p>
              ) : null}
              <ul className="navbar-nav m-auto text-center">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item px-3">
                      <NavLink to="/dashboard"
                       className={({ isActive, isPending }) =>
                       isPending ? "nav-link text-dark" : isActive ? "nav-link selected-menu" : "nav-link text-dark"
                     }>
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item px-3">
                      <NavLink className={({ isActive, isPending }) =>
                       isPending ? "nav-link text-dark" : isActive ? "nav-link selected-menu" : "nav-link text-dark"
                     } to="/investHistory">
                        Investment History
                      </NavLink>
                    </li>
                    <li className="nav-item px-3">
                      <NavLink className={({ isActive, isPending }) =>
                       isPending ? "nav-link text-dark" : isActive ? "nav-link selected-menu" : "nav-link text-dark"
                     } to="/roiHistory">
                        ROI History
                      </NavLink>
                    </li>
                    <li className="nav-item px-3">
                      <NavLink className={({ isActive, isPending }) =>
                       isPending ? "nav-link text-dark" : isActive ? "nav-link selected-menu" : "nav-link text-dark"
                     } to="/referralIncome">
                        Referral Income
                      </NavLink>
                    </li>
                    <li className="nav-item px-3">
                      <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "nav-link text-dark" : isActive ? "nav-link selected-menu" : "nav-link text-dark"
                      }
                        to="/withdrawHistory"
                      >
                        Withdraw Histroy
                      </NavLink>
                    </li>
                  </>
                ) : null}
              </ul>

              <ul className="navbar-nav ml-auto text-center">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item px-3 text-dark">
                      <Link
                        className="nav-link"
                        to=""
                        onClick={() => handleLogout()}
                      >
                        <RiLogoutBoxRFill color="#394CF4"/>
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link px-5" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-5" to="/signup">
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </ul>
                {
                  window.innerWidth < 768 ? <div className="position-fixed" style={{ bottom: "0", left: 0, right: 0 }}>
                  <Footer />
                </div> : null
                }
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
