import logo from "./logo.svg";
import "./App.css";
import config from "./config";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate,
  redirect,
} from "react-router-dom";
import Login from "./login/login";
import Dashboard from "./dashboard";
import { useEffect } from "react";
import Forgot from "./login/forgot";
import Register from "./login/register";
import Home from "./Home";
import Users from "./Users";
import Schedules from "./Schedules";
import Transactions from "./Transactions";
var loginuser = false;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
