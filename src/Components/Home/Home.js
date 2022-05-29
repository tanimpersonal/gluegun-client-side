import axios from "axios";
import React, { useEffect, useState } from "react";
import banner from "../../Assets/Images/glue-gun-banner.jpg";
import SingleTool from "../../SingleTool/SingleTool";
import Summary from "../../Summary/Summary";
import Testimonial from "../../Testimonial/Testimonial";
import useTools from "../../Utility/useTools";
const Home = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/tools/").then((data) => setTools(data.data));
  }, []);
  console.log(tools);
  return (
    <div>
      <div className="banner">
        <img src={banner} className="max-w-full w-screen h-auto" alt="..." />
      </div>
      <div className="tools">
        <div className="tools-header flex justify-center my-5">
          <h1 className="text-4xl">Tools</h1>
        </div>
        <div className="tool-data grid lg:grid-cols-3">
          {tools.map((tool) => (
            <SingleTool key={tool._id} tool={tool}></SingleTool>
          ))}
        </div>
      </div>
      <div className="summary">
        <Summary></Summary>
      </div>
      <div className="testimonial">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
