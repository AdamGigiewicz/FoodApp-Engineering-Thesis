import React from 'react'
import {DashboardHeader, DashboardHome, DashboardItems, DashboardOrders, DashboardNewItem, DashboardUsers} from "../components"
import { Route, Routes } from 'react-router-dom';


const DashboardRightSection = () => {
  return (
    <div className="flex flex-col py-12 px-12 flex-1 h-full">
      <DashboardHeader/>
      <div className="flex flex-col overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/orders" element={<DashboardOrders />} />
          <Route path="/items" element={<DashboardItems />} />
          <Route path="/newItem" element={<DashboardNewItem />} />
          <Route path="/users" element={<DashboardUsers />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRightSection;
