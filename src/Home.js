import React, { useEffect } from "react";

function Home() {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    document.title = "Home";
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
          <a className="currentPage" href="/home">
            Home{" "}
          </a>
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

export default Home;
