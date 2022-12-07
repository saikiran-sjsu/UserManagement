import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../src/login/login.css";

function Navigation(props) {
  const location = useLocation();
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(location.pathname);
  });

  return (
    <div className="nav-bar">
      <div className="a-style">
        <a className={pathName === "/home" ? "currentPage" : ""} href="/home">
          Home{" "}
        </a>
        <a className={pathName === "/users" ? "currentPage" : ""} href="/users">
          Users{" "}
        </a>
        <a
          className={pathName === "/schedules" ? "currentPage" : ""}
          href="/schedules"
        >
          Schedules{" "}
        </a>
        <a
          className={pathName === "/transactions" ? "currentPage" : ""}
          href="/transactions"
        >
          Transactions{" "}
        </a>
      </div>
    </div>
  );
}

export default Navigation;
