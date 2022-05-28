import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section class="mb-20 text-gray-700 px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h3 class="text-3xl font-bold mb-6 text-gray-800">Happy Clients</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-12 text-center">
          <div class="mb-6 md:mb-0">
            <div class="flex justify-center mb-6">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
                class="rounded-full shadow-lg w-24"
                alt=""
              />
            </div>
            <p class="text-xl my-4 text-gray-500">
              I'm very happy to get my glue gun from them. It's highly working
            </p>
            <p class="italic">- Anna Morian</p>
          </div>
          <div class="mb-0">
            <div class="flex justify-center mb-6">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
                class="rounded-full shadow-lg w-24"
                alt=""
              />
            </div>
            <p class="text-xl my-4 text-gray-500">
              I'm very happy to get my glue gun from them. It's highly working.
              It's electricity cost is lower and also child friendly
            </p>
            <p class="italic">- Teresa May</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
