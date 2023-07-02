import { NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { useState } from "react";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  console.log(hidden)
  const hiddenController = () => {
    setHidden(!hidden)
  }
  return (
    <nav className="flex  justify-between static top-0  p-5 bg-slate-200  ">
      <div>
        <h1 className="text-3xl md:text-5xl text-purple-500">Portfolio</h1>
      </div>
      <div className="">
        <AiOutlineMenuFold className={`absolute top-7 right-7 text-2xl text-purple-400 md:hidden cursor-pointer ${hidden || 'hidden'}`} onClick={hiddenController}></AiOutlineMenuFold>
        <RxCross2 className={`absolute  top-7 right-7 text-2xl text-purple-400 md:hidden cursor-pointer ${hidden && 'hidden'}` } onClick={hiddenController}></RxCross2>

        <ul className={`font-semibold md:space-x-4 flex flex-col md:block justify-start items-start mt-5 md:mt-0 absolute md:static top-10 bg-slate-200 px-4 md:px-0 transition duration-500 ease-out ${hidden?'  translate-x-full md:translate-x-0 transition duration-1000':' right-2 pb-2'} `} >


          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-purple-400 text-purple-400' : ' p-1 border-b-2  hover:border-purple-400 hover:text-purple-400 transition duration-200 ease-in'} to='/'>Home </NavLink>


          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-purple-400 text-purple-400' : ' p-1 border-b-2  hover:border-purple-400 hover:text-purple-400 transition duration-200 ease-in'} to='about'> About </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-purple-400 text-purple-400' : ' p-1 border-b-2  hover:border-purple-400 hover:text-purple-400 transition duration-200 ease-in'} > Skills </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-purple-400 text-purple-400' : ' p-1 border-b-2  hover:border-purple-400 hover:text-purple-400 transition duration-200 ease-in'} > Project </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-purple-400 text-purple-400' : ' p-1 border-b-2  hover:border-purple-400 hover:text-purple-400 transition duration-200 ease-in'} > Contact </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;