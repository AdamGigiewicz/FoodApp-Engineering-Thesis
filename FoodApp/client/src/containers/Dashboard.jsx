import React from 'react';
import DashboardLeftSection from "./DashboardLeftSection";
import DashboardRightSection from "./DashboardRightSection";


const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex items-center">
        <DashboardLeftSection/>
        <DashboardRightSection/>
    
    </div>
        
  )
}

export default Dashboard
