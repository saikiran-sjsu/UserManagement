import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/login/login.css";
function Dashboard() {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  console.log(userInfo);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  const logout = () => {
    console.log("Button pressed?");
    sessionStorage.removeItem("login");
    window.location.href = "/";
  };
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <i class="bi bi-apple"></i>
        </div>
        <div className="header-right">
          &nbsp;
          <i class="bi bi-bell"></i>
          <i class="bi bi-person-circle"></i>
          &nbsp;
          <span>{userInfo.firstname}</span>
        </div>
      </div>
      <div className="nav-bar">
        <div className="a-style">
          <a href="/home">Home </a>
          <a href="/users">Users </a>
          <a href="/schedules">Schedules </a>
          <a href="/transactions">Transactions </a>
        </div>
      </div>
      <br />
      <span>
        <h1>Users</h1>
        <h1>Transactions</h1>
      </span>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
