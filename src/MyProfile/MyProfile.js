import axios from "axios";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const education = useRef();
  const city = useRef();
  const phone = useRef();
  const handleUpdateUser = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/users?email=${user.email}`, {
      name: user.displayName,
      email: user.email,
      city: city.current.value,
      education: education.current.value,
      phone: phone.current.value,
    });
  };
  return (
    <div>
      <div className="name-email">
        <p> Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <div className="form flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={handleUpdateUser}>
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    ref={education}
                    placeholder="Education"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    ref={city}
                    placeholder="City"
                  />
                </div>
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  ref={phone}
                  placeholder="phone"
                />
              </div>

              <button
                type="submit"
                class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
