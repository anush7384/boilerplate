import { useRoutes } from "react-router-dom";

import { HOME } from "../utils/routepaths";
import Signup from "./Signup/index";

const AppRoutes = () => {
  const routes = useRoutes([{ path: HOME, element: <Signup /> }]);
  return routes;
};

export default AppRoutes;
