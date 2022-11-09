import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const RegisterPageComponent = ({ registerUserApiRequest }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [loggedInUser, setloggedInUser] = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerUserResponseState, setRegisterUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (email && password && name && lastName) {
      registerUserApiRequest(name, lastName, email, password)
        .then((res) => {
          setRegisterUserResponseState({
            success: res.success,
            loading: false,
          });
          setloggedInUser(res.userCreated);
          if (res.success === "User created") {
            navigate("/login", { replace: true });
          }

          sessionStorage.setItem("userInfo", JSON.stringify(res.userCreated));
        })
        .catch((er) =>
          setRegisterUserResponseState({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          })
        );
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <form
        action=""
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
        onSubmit={handleSubmit}
      >
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-">
          <h1 className="mb-8 text-3xl text-center">Register</h1>
          {registerUserResponseState &&
            registerUserResponseState.error === "user exists" && (
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mb-3">
                  User with that email already exists!
                </div>
              </div>
            )}
          {registerUserResponseState &&
            registerUserResponseState.success === "User created" && (
              <div role="alert">
                <div className=" bg-green-500 text-white font-bold rounded-t px-4 py-2 mb-3">
                  User Created
                </div>
              </div>
            )}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded  bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Register
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/login"
          >
            login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPageComponent;
