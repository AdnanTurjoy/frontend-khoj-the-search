import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <h1>Project Name: "Ami Coding Pari Na"</h1>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-">
          <Link to={"/khoj"}>
            <button className="w-full text-center py-3 rounded  bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">
              KHOJ
            </button>
          </Link>

          <Link to={"/login"}>
            <button className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="w-full text-center py-3 rounded  bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1">
              Register

              
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
