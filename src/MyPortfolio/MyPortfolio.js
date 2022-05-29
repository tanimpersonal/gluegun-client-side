import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Tanim Istiak
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Email: tashintanim2019@gmail.com
          </p>
          <p className="text-gray-700 text-base mb-4">
            Educational Background: CSE 2nd Year, Daffodil
          </p>
          <h1>Technologies I Know: </h1>
          <ul className="list-disc px-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Firebase</li>
            <li>Mongo</li>
            <li>C</li>
          </ul>
          <h1>Live Link:</h1>
          <ul className="list-disc px-5">
            <li>
              <a href="https://assignment-10-41ce1.web.app/">Photography</a>
            </li>
            <li>
              <a href="https://ema-john-8a597.web.app/">EmaJohn</a>
            </li>
            <li>
              <a href="https://fokiracoinbase.netlify.app/">Coinbase</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
