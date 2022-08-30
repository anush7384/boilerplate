import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "../routes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
