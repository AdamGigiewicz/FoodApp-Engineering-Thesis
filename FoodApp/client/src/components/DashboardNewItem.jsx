import React, { useState } from 'react';
import { statuses } from '../utils/styles';


const DashboardNewItem = () => {
  
    const [itemName, setItemName] = useState("")
    const [category, setCategory] = useState(null)
    return (
    <div className="flex items-center justify-center gap-4 pt-6 px-24 w-full">
      <div className="border border-gray-300 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">
      <InputValueField
        type="text"
        placeholder={"Nazwa dania"}
        stateFunc={setItemName}
        stateValue={itemName}
      />
      <div className="w-full flex items-center justify-around gap-3 flex-wrap">
        {statuses && statuses?.map((data) => (
          <p key={data.id} 
          onClick={() => setCategory(data.category)}
          className={`px-4 py-3 rounded-md text-xl text-textColor font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md 
          ${data.category === category 
            ? "bg-red-400 text-primary" 
            : "bg-transparent"
          }`}>
          {data.title}
          </p>
        ))}
        </div>
      </div>
        
    </div>
  );
};

export const InputValueField = ({type, placeholder, stateValue, stateFunc}) => {
  return (
    <>
    <input 
        type = {type}
        placeholder= {placeholder}
        className="w-full px-4 py-3 bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-red-400"
        value={stateValue}
        onChange={(e) => stateFunc(e.target.value)}
    />
  </>
  );
};

export default DashboardNewItem;
