import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./header";
import DashboardContent from "./dashboardContent";
function Dashboard() {
  return (
    <div>
      <Header />
      <br />
      <DashboardContent />
      <h1>Calender</h1>
    </div>
  );
}

export default Dashboard;
