import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/logo-light.svg";
import '../App.css'
function SideBar() {
  return (
    <div className="bg-[#131014] h-screen w-1/4 md:w-1/5 fixed">
      <div className="py-6 mb-8">
        <img className="mx-auto" src={Logo} alt="" />
      </div>
      <nav className="text-white flex flex-col my-2">
        <NavLink 
            className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]" 
            to="/dashboard/all">All DAOs</NavLink>
        <NavLink 
            className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]" 
            to="/dashboard/social">Social</NavLink>
        <NavLink 
            className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]" 
            to="/dashboard/products">Products</NavLink>
        <NavLink 
            className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]" 
            to="/dashboard/investments">Investments</NavLink>
        <NavLink 
            className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]" 
            to="/dashboard/non-profits">Non-Profits</NavLink>  
        <NavLink 
            className="py-4 hover:border-x-[#FFE6C3] border-x-0 hover:border-x-4 hover:bg-stone-600/20 transition-all px-6 font-[Manrope]" 
            to="/dashboard/grants">Grants and Accelerators</NavLink>
      </nav>
    </div>
  );
}

export default SideBar;
