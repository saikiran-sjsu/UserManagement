import React, { useEffect } from "react";
import Header from "./header";
import DashboardContent from "./dashboardContent";

function Users() {
  useEffect(() => {
    document.title = "Users";
  }, []);
  return (
    <div>
      <Header />
      <br />
      <DashboardContent />
    </div>
  );
}

export default Users;
