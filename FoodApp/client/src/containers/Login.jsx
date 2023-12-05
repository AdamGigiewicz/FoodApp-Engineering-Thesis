import React from 'react'
import {LoginBg , Logo} from "../assets"


const Login = () => {
  return <div className="w-screen h-screen relative overflow-hidden flex">

  {/*background img*/}

  <img src={LoginBg} className="w-full h-full object-cover absolute top-0 left-0" alt=""/>

  {/*content box */}

  <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">

  <div className="flex items-center justify-start gap-4 w-full">
    {/*<img src={Logo} className="w-8" alt=""/> */}
    <p className="text-headingColor font-semibold text-2xl">Restauracja Wirtuozeria</p>
  </div>

    {/* Welcome text */}
    <p className="text-3xl font-semibold text-headingColor">Witaj ponownie!</p>
    <p className="text-xl text-textColor -mt-5">Zaloguj się</p>
  
    {/* Input section*/}
      <div className="w-full flex-col items-center justify-center gap-6 px-4 md:px-12 py-4"></div>
    </div>
  </div>


};

export default Login
