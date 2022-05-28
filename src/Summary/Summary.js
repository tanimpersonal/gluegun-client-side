import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Summary = () => {
  return (
    <div className="grid lg:grid-cols-3 my-5">
      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">Customer</div>
          <div class="p-6">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div style={{ height: 50 }}>
                  {isVisible ? (
                    <CountUp className="text-3xl" end={1000} suffix="+" />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
            <p class="text-gray-700 text-base mb-4">
              We have 1000 and more happy clients!
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">Order Delivered</div>
          <div class="p-6">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div style={{ height: 50 }}>
                  {isVisible ? (
                    <CountUp
                      className="text-3xl"
                      start={1000}
                      end={2000}
                      suffix="+"
                    />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
            <p class="text-gray-700 text-base mb-4">
              We have Delivered order from the few last 5 years!
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">Office Location</div>
          <div class="p-6">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div style={{ height: 50 }}>
                  {isVisible ? (
                    <CountUp className="text-3xl" end={50} suffix="+" />
                  ) : null}
                </div>
              )}
            </VisibilitySensor>
            <p class="text-gray-700 text-base mb-4">
              We have 50 international grade offices throughout the world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
