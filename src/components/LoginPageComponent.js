import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const LoginPageComponent = ({ loginUserApiRequest }) => {
  const [loggedInUser, setloggedInUser] = useContext(AuthContext);

  const [validated, setValidated] = useState(false);

  const [loginUserResponse, setLoginUserResponse] = useState({
    success: "",
    error: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget.elements;

    const email = form.email.value;
    const password = form.password.value;

    if (event.currentTarget.checkValidity() === true && email && password) {
      loginUserApiRequest(email, password)
        .then((res) => {
          setloggedInUser(res.userLoggedIn);
          setLoginUserResponse({
            success: res.success,
            error: "",
          });
          localStorage.setItem("userInfo", JSON.stringify(res.userLoggedIn));
          if (res.success === "user logged in") navigate("/khoj");
        })
        .catch((er) => {
          console.log(er.response.data);
          // setLoginUserResponse({
          //   error: er.response.data.message
          //     ? er.response.data.message
          //     : er.response.data,
          // });
        });
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don't you have an account?
                <Link to={"/register"}> Register </Link>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <Alert
              show={
                loginUserResponse &&
                loginUserResponse.error === "wrong credentials"
              }
              variant="danger"
            >
              Wrong credentials
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPageComponent;
