import { Dispatch } from "redux";
import React, { useState } from "react";
import { connect } from "react-redux";

import "./styles.css";
import {signUp} from "./../../store/actionCreators/index";

interface propsType {
  signUp: (name: string) => void;
}
const Signup = (props: propsType) => {
  const [name, setName] = useState("");
  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const inputSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && name !== "") {
      props.signUp(name);
      setName("");
    }
  };

  return (
    <div>
      <input
        id="signup_input"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={inputNameHandler}
        onKeyPress={inputSubmit}
      ></input>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (name: string) => dispatch(signUp(name)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
