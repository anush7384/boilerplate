import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <h1>HOME PAGE</h1>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Home;
