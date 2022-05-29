import axios from "axios";
import React, { useEffect, useState } from "react";

const useTestimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    axios("https://assignment-12-tanim.herokuapp.com/testimonials").then(
      (data) => setTestimonial(data.data)
    );
  }, []);
  return [testimonial];
};

export default useTestimonial;
