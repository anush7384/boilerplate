import { useNavigate } from "react-router-dom";

const  Login = () => {
  const navigate = useNavigate();
  const loginHandler = (): void  => {
    localStorage.setItem("Login", "true");
    navigate('/home');
  };

  return (
    <>
      <h1>LOGIN</h1>
      <div>
        <input type="text" />
        <button onClick={loginHandler}>LOGIN</button>
      </div>
    </>
  );
};

export default Login;
