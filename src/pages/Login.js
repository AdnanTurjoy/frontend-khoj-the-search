import React from "react";

import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-">
            <h1 className="mb-8 text-3xl text-center">Login</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
            />

            <Link
              to={"/khoj"}
              type="submit"
              className="w-full text-center py-3 rounded  bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Login
            </Link>
          </div>

          <div className="text-grey-dark mt-6">
            Don't have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/register"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
