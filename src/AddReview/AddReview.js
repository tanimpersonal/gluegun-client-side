import axios from "axios";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";

const AddReview = () => {
  const rating = useRef();
  const review = useRef();
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      parseInt(rating.current.value) > 0 &&
      parseInt(rating.current.value) <= 5
    ) {
      toast.success("Review Added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      axios.post("http://localhost:5000/testimonials", {
        rating: rating.current.value,
        user: user.displayName,
        review: review.current.value,
      });
    } else {
      toast.error("Error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      Add Review
      <ToastContainer />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            ref={rating}
            type="text"
            required
            placeholder="Rating number from 1-5"
          />
          <input
            type="text"
            ref={review}
            required
            name=""
            placeholder="Give your review"
            id=""
          />
          <input type="submit" value="Submit your review" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
