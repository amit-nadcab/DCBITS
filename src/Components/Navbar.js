import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducer";
import { toast } from "react-toastify";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menu, setMenu] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };
  const { user_id, isLoggedIn } = useSelector((state) => state.data.value);
  return (
    //  <!-- Main-menu Strat -->
    <div className="mein-menu">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="assets/img/logo_1.png" alt="logo" height="42px" />
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

          {/* NEW */}

          <div className="offcanvas offcanvas-bottom offcanvas-mobile" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
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
            <ul className="navbar-nav text-center ml-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-primary"
                      to=""
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/signup">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
