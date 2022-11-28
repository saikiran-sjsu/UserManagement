import React, { useState, useEffect } from "react";
import "./login.css";

//Fields: Email and Submit Button
function Forgot() {
  const [forgotData, setForgotData] = useState({
    email: "",
  });
  const forgotFunc = () => {
    localStorage.setItem("forgotData", JSON.stringify(forgotData));
    window.location.href = "/";
  };
  return (
    <div className="center">
      <div className="container"></div>
      <p className="style-center">
        <b>Forgot Password</b>
      </p>
      <p className="style spacing">
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(event) =>
            setForgotData({ ...forgotData, email: event.target.value })
          }
        ></input>
      </p>
      <br />
      <br />
      <button className="btn loginbtn" onClick={() => forgotFunc()}>
        Submit
      </button>
    </div>
  );
}

export default Forgot;
