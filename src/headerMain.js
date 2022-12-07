import React, { useEffect, useContext } from "react";

function HeaderMain(props) {
  // const value = useContext(props.value);
  // console.log(value);
  return (
    <div className="header">
      <div className="header-left">
        <i className="bi bi-apple"></i>
      </div>
      <div className="header-right">
        &nbsp;
        <i className="bi bi-bell"></i>
        <i className="bi bi-person-circle"></i>
        &nbsp;
        <span>{props.userInfo.firstname}</span>
      </div>
    </div>
  );
}

export default HeaderMain;
