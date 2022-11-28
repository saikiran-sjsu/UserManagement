import React, { useState, useEffect } from "react";
import "./login.css";
import config from "../config";

function Login({ Loginfunc }) {
  var loginuser = false;
  console.log(config.loginInfo.email);
  console.log(config.loginInfo.password);

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const registerbtn = () => {
    window.location.href = "/register";
  };

  let reload = 0;
  useEffect(() => {
    console.log("INSIDE USE EFFECT");
    console.log(JSON.parse(sessionStorage.getItem("login")));
    if (JSON.parse(sessionStorage.getItem("login")) == 1) {
      window.location.href = "/dashboard";
    }
  }, []);
  const [errorMsg, seterrorMsg] = useState("");

  const loginMethod = (e) => {
    localStorage.setItem("loginData", JSON.stringify(loginData));
    loginfunc();
  };

  const loginfunc = (e) => {
    // Loginfunc(loginData);
    if (
      loginData.email === config.loginInfo.email &&
      loginData.password === config.loginInfo.password
    ) {
      console.log("User can login");
      sessionStorage.setItem("loginData", JSON.stringify(loginData.email));
      sessionStorage.setItem("login", 1);
      localStorage.setItem("userData", JSON.stringify(config.loginInfo));
      loginuser = true;
      // redirect("/dashboard");
      window.location.href = "/dashboard";
      console.log("User Valid?: ", loginuser);
    } else {
      seterrorMsg("Invalid email or password");
      console.log("User Valid?: ", loginuser);
    }
  };

  // console.log(loginuser);

  return (
    <div className="center">
      <div className="container">
        <p className="style">
          <b>Log in</b>
        </p>

        {/* <h6 className="spacing">Email </h6> */}
        <b>
          <p className="style spacing">Email </p>
        </b>
        <p className="style spacing">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(event) =>
              setloginData({ ...loginData, email: event.target.value })
            }
          ></input>
        </p>
        <br />
        <br />
        <b>
          <p className="style spacing">Password &nbsp;</p>
        </b>
        <p className="style spacing">
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) =>
              setloginData({ ...loginData, password: event.target.value })
            }
          ></input>
        </p>
        <br />
        <p className="error spacing">{errorMsg}</p>
        <p className="spacing">
          <input className="style1" type="checkbox"></input>
          Remember Me &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/forgot">Forgot your password?</a>
        </p>
        <br></br>
        <button className="btn loginbtn" onClick={() => loginMethod()}>
          Login
        </button>
        <br />
        <br />
        <button className="btn registerbtn" onClick={() => registerbtn()}>
          <b>Register</b>
        </button>
      </div>
    </div>
  );
}

export default Login;
