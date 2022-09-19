import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Fragment>
      <h1>HOME PAGE</h1>
      <button onClick={logoutHandler}>Logout</button>
    </Fragment>
  );
};

export default Home;
