import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
import auth from "../firebase.init";
import useTools from "../Utility/useTools";

const Purchase = () => {
  //   const [tools] = useTools();
  const { id } = useParams();
  const [filterTool, setFilterTool] = useState({});
  useEffect(() => {
    axios(`https://assignment-12-tanim.herokuapp.com/tools/${id}`).then(
      (data) => setFilterTool(data.data)
    );
  }, []);

  //   const filterTool = tools.find((tool) => tool._id == id);
  console.log(filterTool);
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="mt-5">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={filterTool?.image} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {filterTool?.name}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {filterTool?.description}
            </p>
            <p>Available Quantity: {filterTool?.available_quantity}</p>
            <p>Price per unit; ${filterTool?.price}</p>
            <p>Minimum Order Quantity: {filterTool?.minimum_order_quantity}</p>
          </div>
        </div>
      </div>
      <div className="signIn mt-5">
        <h1 className="text-center text-3xl mb-5">You're Signed In as: </h1>
        <div class="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">{user.email}</h5>
          <p class="text-gray-500">{user.displayName}</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="form-header">Fill Up The Form To Place Order</div>
        <ContactForm
          filterTool={filterTool}
          setFilterTool={setFilterTool}
        ></ContactForm>
      </div>
    </div>
  );
};

export default Purchase;
