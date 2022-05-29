import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if (loading || updating) {
    return <p>Loading..</p>;
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    const displayName = await data.name;
    await updateProfile({ displayName });
  };
  console.log(user);
  return (
    <div className="flex justify-center my-5">
      <h1 className="">Register</h1>
      <div className="login">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputName2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputName2"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
              />
            </div>
            <p>{error && `${error}`}</p>
            <div className="flex justify-between items-center mb-6">
              <a
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Register
            </button>
            <p className="text-gray-800 mt-6 text-center">
              Already a member?
              <Link
                to="/login"
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
