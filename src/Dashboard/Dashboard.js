import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <nav
        class="
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
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            class="
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
              class="w-6"
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
            class="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              {user.displayName !== "admin" && (
                <li class="nav-item px-2">
                  <Link
                    to="my-orders"
                    className="nav-link active"
                    aria-current="page"
                  >
                    My Orders
                  </Link>
                </li>
              )}
              {user.displayName === "admin" && (
                <li class="nav-item px-2">
                  <Link
                    to="all-orders"
                    className="nav-link active"
                    aria-current="page"
                  >
                    All orders
                  </Link>
                </li>
              )}
              {user.displayName === "admin" && (
                <li class="nav-item px-2">
                  <Link
                    to="add-tools"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Add Tools
                  </Link>
                </li>
              )}
              {user.displayName !== "admin" && (
                <li class="nav-item pr-2">
                  <Link
                    to="add-review"
                    class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  >
                    Add Review
                  </Link>
                </li>
              )}
              <li class="nav-item pr-2">
                <Link
                  to="my-profile"
                  class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
