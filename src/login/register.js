import React, { useState, useEffect } from "react";

function Register() {
  const [registerData, setRegisterData] = useState({
    Name: "",
    Email: "",
    Phone_Number: "",
  });

  const registerbtn = () => {
    console.log(registerData.Name);
    console.log(registerData.Email);
    console.log(registerData.Phone_Number);

    console.log(typeof registerData.Name);
    if (
      registerData.Name === "" ||
      registerData.Email === "" ||
      registerData.Phone_Number === ""
    ) {
      alert("Fields are null.");
    } else {
      localStorage.setItem("registerData", JSON.stringify(registerData));
      window.location.href = "/";
    }
  };
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
              setRegisterData({ ...registerData, Email: event.target.value })
            }
          ></input>
        </p>
        <br />
        <br />
        <b>
          <p className="style spacing">Name &nbsp;</p>
        </b>
        <p className="style spacing">
          <input
            type="Name"
            placeholder="Enter Name"
            onChange={(event) =>
              setRegisterData({ ...registerData, Name: event.target.value })
            }
          ></input>
        </p>
        <br />

        <br />
        <b>
          <p className="style spacing">Phone Number &nbsp;</p>
        </b>
        <p className="style spacing">
          <input
            type="Phone Number"
            placeholder="408-555-5555"
            onChange={(event) =>
              setRegisterData({
                ...registerData,
                Phone_Number: event.target.value,
              })
            }
          ></input>
        </p>
        <br />
        <br />
        <button className="btn registerbtn" onClick={() => registerbtn()}>
          <b>Register</b>
        </button>
      </div>
    </div>
  );
}

export default Register;
