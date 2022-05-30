import React from "react";
import useTestimonial from "../useTestimonial/useTestimonial";
import { Rating } from "react-simple-star-rating";
const Testimonial = () => {
  const [data] = useTestimonial();
  console.log(data);
  return (
    <div>
      <section class="mb-20 text-gray-700 px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h3 class="text-3xl font-bold mb-6 text-gray-800">Happy Clients</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-12 text-center">
          {data?.map((testimonial) => {
            return (
              <div key={data._id} class="mb-6 md:mb-0">
                <div class="flex justify-center mb-6">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                    class="rounded-full shadow-lg w-24"
                    alt=""
                  />
                </div>
                <p class="text-xl my-4 text-gray-500">{testimonial.review}</p>

                <Rating
                  style={{ display: "block" }}
                  readonly
                  iconsCount={parseInt(testimonial.rating)}
                  initialValue={parseInt(testimonial.rating)}
                />

                <p class="italic">- {testimonial.user}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
