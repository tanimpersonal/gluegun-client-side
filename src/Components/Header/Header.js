import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import gun from "../../Assets/Images/glue-gun.png";
import auth from "../../firebase.init";
const Header = () => {
  const firstStyle = {
    height: "50px",
  };
  const secondStyle = {
    height: "25px",
    width: "25px",
  };

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogOut = (event) => {
    event.preventDefault();
    signOut(auth);
  };
  console.log(user);
  return (
    <div>
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link
              to="/"
              className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
            >
              <img src={gun} style={firstStyle} alt="" loading="lazy" />
            </Link>

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              {!user && (
                <li className="nav-item p-2">
                  <Link
                    to="/register"
                    className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  >
                    Register
                  </Link>
                </li>
              )}
              <li className="nav-item p-2">
                <Link
                  to="/blogs"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                >
                  Blogs
                </Link>
              </li>
              {!user && (
                <li className="nav-item p-2">
                  <Link
                    to="/login"
                    className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                    href="#"
                  >
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item p-2">
                <Link
                  to="/admin"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/portfolio"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center relative">
            {user ? (
              <div className="dropdown relative">
                <a
                  className="dropdown-toggle flex items-center hidden-arrow"
                  href="/"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    className="rounded-full"
                    style={secondStyle}
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <p
                      className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                    >
                      {user && user.displayName}
                    </p>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                      href="#"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
