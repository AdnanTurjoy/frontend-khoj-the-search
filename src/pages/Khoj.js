import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

const URL = "http://localhost:8005/Khoj_the_search_Page";
function Khoj(props) {
  const [loggedInUser, setloggedInUser] = useContext(AuthContext);
  console.log("from khoj: ", loggedInUser);
  const [values, setValues] = useState("");
  const [searchValue, setSearchValue] = useState(0);
  const [error, setError] = useState("");
  const addkhoj = (element) => {
    // console.log(user);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(element),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const input_values = values;
    const user = loggedInUser._id;
    const newKhoj = {
      input_values,
      user,
    };
    console.log(newKhoj);
    addkhoj(newKhoj);
  };

  return (
    <form
      className="flex mx-auto container max-w-sm  m-20 bg-grey-lighter min-h-screen flex-col"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Input values
        </label>
        <input
          type="text"
          id="values"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="values e.g, 2, 4, ,1, 6, 7"
          required=""
          onChange={(e) => setValues(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          search value
        </label>
        <input
          type="number"
          id="searchValue"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Khoj
      </button>
      <h1>Result: </h1>
    </form>
  );
}

export default Khoj;
