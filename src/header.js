import React, { useEffect, useState, useContext, createContext } from "react";
import HeaderMain from "./headerMain";
import Navigation from "./navigation";
import { useLocation } from "react-router";
import "../src/login/login.css";

function Header() {
  const [userInfo, setUserInfo] = useState("");
  const userContext = createContext();
  useEffect(() => {
    document.title = "Dashboard";
    if (JSON.parse(localStorage.getItem("userData") == null)) {
      console.log("User doesnt exist");
      window.location.href = "/";
    } else {
      setInfo();
    }
  }, []);

  const setInfo = () => {
    // const userInfo = JSON.parse(localStorage.getItem("userData"));
    setUserInfo(JSON.parse(localStorage.getItem("userData")));
  };

  return (
    <div>
      <userContext.Provider value={userInfo}>
        <HeaderMain userInfo={userInfo} />
        <Navigation userInfo={userInfo} />
      </userContext.Provider>
    </div>
  );
}

export default Header;
