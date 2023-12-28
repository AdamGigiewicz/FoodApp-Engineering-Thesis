import React from 'react'
import { NavLink } from 'react-router-dom'
import {Logo} from "../assets"
import { isActiveStyles, isNotActiveStyles } from '../utils/styles'

const Header = () => {
  return  <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6">
    <NavLink to={"/"} className="flex items-center justify-center gap-4">
            <img src={Logo} className="w-12" alt ="" />
            <p className="font-semibold text-xl"> Restauracja Wirtuozeria</p>
    </NavLink>

    <nav className="flex items-center justify-center gap-8">
        <ul className="hidden md:flex items-center justify-center gap-16">
            <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={"/"}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={"/menu"}>Menu</NavLink>
            <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={"/services"}>Usługi</NavLink>
            <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={"/aboutUs"}>O nas</NavLink>
        </ul>
    </nav>
  </header>
}

export default Header
