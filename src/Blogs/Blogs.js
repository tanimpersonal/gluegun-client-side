import React from "react";

const Blogs = () => {
  return (
    <div className="my-5 px-5">
      <div className="first">
        <h1 className="text-3xl">
          How will you improve the performance of a React Application?
        </h1>
        <p>1. Keeping component state local </p>
        <p>2. Prevent not required re-render </p>
        <p>3. Lazy loading </p>
        <p>4. Receive only necessary props </p>
      </div>
      <div className="second my-5">
        <h1 className="text-3xl">
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          We can manage state through useState hook in react. We can also manage
          the state while reloading the page through useEffect. Also we can
          manage state with useReducer hook.
        </p>
      </div>
      <div className="third my-5">
        <h1 className="text-3xl"> How does prototypical inheritance work?</h1>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. In this method an object can
          inherit the properties and methods of another object. In order to get
          and set the [[Prototype]] of an object, we use Object. getPrototypeOf
          and Object
        </p>
      </div>
      <div className="fourth my-5">
        <h1 className="text-3xl">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p>
          I will here use array filter method as with same name there could be
          more than one product. It is the way: const nameProduct=
          products.filter(product= &gt; product.name===name)
        </p>
      </div>
      <div className="fifth my-5">
        <h1 className="text-3xl">
          What is a unit test? Why should write unit tests?
        </h1>
        <p>
          Unit test is a post development things. After developing the
          applications a bunch of persons test the application from around every
          corner of it. We should write unit tests to make sure that the code
          works correctly.This helps to detect and protect against bugs in the
          future.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
