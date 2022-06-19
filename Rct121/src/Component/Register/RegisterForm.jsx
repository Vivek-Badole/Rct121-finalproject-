import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerlogo from "../../Images/registerlogo.png";

import {
  Register_logo,
  RegContainer,
  Form,
  button,
  Title,
  FormInputDiv
} from "./Register.element";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const savingData = () => {
    var datas = [];
    const data = {
      name: name,
      password: password,
      email: email
    };

    if (name.length === 0 || password.length === 0 || email.length === 0) {
      alert("Input field cannot be empty!");
    } else if (password.length < 8) {
      alert("Minimum length of password should be eight characters");
    } else {
      datas.push(data);
      datas = datas.concat(JSON.parse(localStorage.getItem("datas") || "[]"));
      localStorage.setItem("datas", JSON.stringify(datas));
      navigate("/login");
    }
  };

  return (
    <RegContainer>
      <Register_logo src={registerlogo} alt="" />

      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        <FormInputDiv>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br></br>
          <input
            type="text"
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
            onClick={() => {
              savingData();
            }}
          >
            REGISTER
          </button>
        </FormInputDiv>
      </Form>
      <p>
        Already having Account please
        <Link to="/login">Login</Link>
      </p>
    </RegContainer>
  );
};
export default RegisterForm;
