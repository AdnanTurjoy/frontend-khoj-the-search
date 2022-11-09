import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

const URL = process.env.REACT_APP_API_LINK + "/Khoj_the_search_Page";

function Khoj(props) {
  const [loggedInUser, setloggedInUser] = useContext(AuthContext);
  const [values, setValues] = useState("");
  const [searchValue, setSearchValue] = useState(0);
  const [error, setError] = useState("");
  const [isFound, setIsFound] = useState();
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
    //console.log(newKhoj);
    addkhoj(newKhoj);         //  POST request
    const valuesKhoj = input_values.split(/[ , ]/); // spilting string ","
    let found = false;
    for (let index = 0; index < valuesKhoj.length; index++) {
      const element = Number(valuesKhoj[index]); //  convert into number
      const targetValue = Number(searchValue);
      console.log(element, targetValue);
      if (element === targetValue) {
        found = true; // check if it found or not
      }
    }
    if (found) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
  };

  return (
    <>
      <h1>Wellcome, {" " + loggedInUser.name}</h1>
      <form
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
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
        <h1>Result:{isFound ? "True" : "False"}</h1>
      </form>
    </>
  );
}

export default Khoj;
