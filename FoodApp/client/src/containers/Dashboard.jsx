import React from 'react';
import DashboardLeftSection from "../components/DashboardLeftSection";
import DashboardRightSection from "../components/DashboardRightSection";


const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex items-center">
        <DashboardLeftSection/>
        <DashboardRightSection/>
    
    </div>
        
  )
}

export default Dashboard
