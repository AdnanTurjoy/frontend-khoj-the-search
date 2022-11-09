import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const LoginPageComponent = ({ loginUserApiRequest }) => {
  const [loggedInUser, setloggedInUser] = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const [loginUserResponse, setLoginUserResponse] = useState({
    success: "",
    error: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (email && password) {
      loginUserApiRequest(email, password)
        .then((res) => {
          setloggedInUser(res.userLoggedIn);
          setLoginUserResponse({
            success: res.success,
            error: "",
          });
          localStorage.setItem("userInfo", JSON.stringify(res.userLoggedIn));
          if (res.success === "user logged in") navigate("/khoj");            // navigate to main home page
        })
        .catch((er) => {
          setLoginUserResponse({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          });
        });
    }

    setValidated(true);
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <form
        action=""
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
        onSubmit={handleSubmit}
      >
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-">
          <h1 className="mb-8 text-3xl text-center">login</h1>
          {loginUserResponse &&
            loginUserResponse.error === "wrong credentials" && (
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mb-3">
                  Wrong credentials
                </div>
              </div>
            )}
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
            Login
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          don't have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/register"
          >
            register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPageComponent;
