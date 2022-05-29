import axios from "axios";
import React, { useEffect, useState } from "react";

const useTestimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/testimonials").then((data) =>
      setTestimonial(data.data)
    );
  }, []);
  return [testimonial];
};

export default useTestimonial;
