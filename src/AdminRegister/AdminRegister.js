import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const AdminRegister = () => {
  const email = useRef("");
  const name = useRef("");
  const password = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const handleAdmin = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    );
    const displayName = name.current.value;
    await updateProfile({ displayName });
  };
  return (
    <div>
      <form onSubmit={handleAdmin}>
        <input className="p-5" ref={email} type="email" placeholder="email" />
        <input
          type="password"
          className="p-5"
          name=""
          ref={password}
          placeholder="Enter password"
          id=""
        />
        <input
          className="p-5"
          type="text"
          ref={name}
          placeholder="make sure name is admin"
        />
        <input type="submit" value="Become Admin" />
      </form>
    </div>
  );
};

export default AdminRegister;
