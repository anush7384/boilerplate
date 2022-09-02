import { Dispatch } from "redux";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { signUp } from "../../store/actions/index";

interface propsType {
  signUp: (obj: objectType) => void;
}
const Signup = (props: propsType) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  window.onbeforeunload = function (e) {
    localStorage.clear();
  };

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPass(e.target.value);
  };

  const signupHandler = (): void => {
    let obj = {
      name: name,
      userName: userName,
      password: pass,
    };
    props.signUp(obj);
    setName("");
    setUserName("");
    setPass("");
    navigate("/login");
  };

  return (
    <div>
      <h1>SIGNUP PAGE</h1>
      <div id="signup_form">
        <input
          className="input"
          id="name_input"
          type="text"
          placeholder="Enter Your Full Name"
          value={name}
          onChange={inputNameHandler}
        ></input>
        <input
          className="input"
          id="username_input"
          placeholder="Enter Your User Name"
          value={userName}
          onChange={userNameHandler}
        />
        <input
          className="input"
          id="pass_input"
          placeholder="Enter Your Password"
          value={pass}
          onChange={passwordHandler}
        />
        <button id="signup_button" onClick={signupHandler}>
          SignUp
        </button>
      </div>
    </div>
  );
};

interface objectType {
  name: string;
  userName: string;
  password: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (obj: objectType) => dispatch(signUp(obj)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
