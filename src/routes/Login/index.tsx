import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

const  Login = () => {
  const navigate = useNavigate();
  const loginHandler = (): void  => {
    localStorage.setItem("accessToken", "true");
    navigate('/home');
  };

  return (
    <Fragment>
      <h1>LOGIN</h1>
      <div>
        <input type="text" />
        <button onClick={loginHandler}>LOGIN</button>
      </div>
    </Fragment>
  );
};

export default Login;
