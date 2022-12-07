import React, { useEffect } from "react";
import Header from "./header";
import DashboardContent from "./dashboardContent";

function Schedules() {
  useEffect(() => {
    document.title = "Schedules";
  }, []);
  return (
    <div>
      <Header />
      <br />
      <DashboardContent />
    </div>
  );
}

export default Schedules;
