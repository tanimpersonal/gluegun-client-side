import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useTestimonial = () => {
  //   const [testimonial, setTestimonial] = useState([]);
  //   useEffect(() => {
  //     axios("https://assignment-12-tanim.herokuapp.com/testimonials").then(
  //       (data) => setTestimonial(data.data)
  //     );
  //   }, []);
  const { isLoading, error, data } = useQuery("testimonial", () =>
    fetch("https://assignment-12-tanim.herokuapp.com/testimonials").then(
      (res) => res.json()
    )
  );

  return [data];
};

export default useTestimonial;
