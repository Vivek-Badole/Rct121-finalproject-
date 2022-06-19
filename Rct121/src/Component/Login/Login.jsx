import { useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import registerlogo from "../../Images/registerlogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Register_logo,
  RegContainer,
  Form,
  FormInputDiv,
  Title
} from "./Login.element";

const handleSubmit = async (e) => {
  e.preventDefault();
};

const Login = () => {
  var arr = JSON.parse(localStorage.getItem("datas")) || [];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function authorisation() {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].email === email && arr[i].password === password) {
        navigate("/cart");
      } else {
        alert("Incorrect Email or Password");
      }
    }
  }

  const navigate = useNavigate();

  return (
    <RegContainer>
      <Register_logo src={registerlogo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Title>LOGIN</Title>
        <FormInputDiv>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>

          <button
            id="normal"
            onClick={() => {
              authorisation();
            }}
          >
            LOGIN
          </button>
        </FormInputDiv>
      </Form>

      <p>
        New Here please
        <Link to="/register">Register</Link>
      </p>
    </RegContainer>
  );
};

export default Login;
