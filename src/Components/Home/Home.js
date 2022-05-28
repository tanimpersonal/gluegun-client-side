import React from "react";
import banner from "../../Assets/Images/glue-gun-banner.jpg";
const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner} className="max-w-full w-screen h-auto" alt="..." />
      </div>
    </div>
  );
};

export default Home;
