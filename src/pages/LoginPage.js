import axios from "axios";
import LoginPageComponent from "../components/LoginPageComponent";
const loginUserApiRequest = async (email, password) => {
  const { data } = await axios.post(process.env.REACT_APP_API_LINK + "/login", {
    email,
    password,
  });
  return data;
};
const LoginPage = () => {
  return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} />;
};

export default LoginPage;
