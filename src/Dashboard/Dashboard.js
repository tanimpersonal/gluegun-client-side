import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="flex my-5 gap-5">
      <div className="w-50  shadow-md bg-white px-5 h-screen">
        <ul class="relative">
          {user.displayName !== "admin" && (
            <li class="relative px-2">
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
            <li class="relative px-2">
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
            <li class="relative px-2">
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
            <li class="relative pr-2">
              <Link
                to="add-review"
                class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              >
                Add Review
              </Link>
            </li>
          )}
          <li class="relative pr-2">
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
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
