import axios from "axios";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";

const ContactForm = ({ filterTool, setFilterTool }) => {
  const [user, loading, error] = useAuthState(auth);

  const [quantity, setQuantity] = useState(filterTool.minimum_order_quantity);

  const quantityValue = useRef("");
  console.log(filterTool);
  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };
  const handleOrder = async (event) => {
    event.preventDefault();
    console.log(quantityValue.current.value);
    if (
      parseInt(quantityValue.current.value) > filterTool.available_quantity ||
      parseInt(quantityValue.current.value) < filterTool.minimum_order_quantity
    ) {
      toast.error("Adjust Quantity", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const total = filterTool.price * quantity;

      console.log(total);
      await axios.post("https://assignment-12-tanim.herokuapp.com/orders", {
        name: user.displayName,
        email: user.email,
        orderId: filterTool._id,
        productName: filterTool.name,
        quantity: quantity,
        total: total,
      });
      const availableQuantity = filterTool.available_quantity - quantity;
      await axios.put(
        `https://assignment-12-tanim.herokuapp.com/tools/${filterTool._id}`,
        {
          available_quantity: availableQuantity,
        }
      );
      await axios(
        `https://assignment-12-tanim.herokuapp.com/tools/${filterTool._id}`
      ).then((data) => setFilterTool(data.data));
    }
  };
  return (
    <div className="flex justify-center">
      <ToastContainer />
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleOrder}>
          <div className="form-group mb-6">
            <input
              type="text"
              value={user?.displayName}
              readOnly
              disabled
              className="form-control block
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
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              value={user.email}
              readOnly
              disabled
              className="form-control block
           
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
              id="exampleInput8"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="number"
              value={quantity}
              ref={quantityValue}
              onChange={handleChange}
              className="form-control block
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
              id="exampleInput7"
              placeholder="Quantity"
            />
          </div>
          <input
            type="submit"
            value=" Place Order"
            className="
            
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
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
