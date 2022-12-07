import React from "react";

function DashboardContent() {
  const logout = () => {
    console.log("Button pressed?");
    sessionStorage.clear();
    localStorage.removeItem("userData");
    window.location.href = "/";
  };
  return (
    <div>
      <span>
        <h1>Users</h1>
      </span>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default DashboardContent;
