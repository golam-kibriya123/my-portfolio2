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
    <nav className="flex  justify-between p-5 bg-slate-100  sticky top-0 z-50">
      <div>
        <h1 className="text-3xl md:text-4xl text-[#754ef9]">Portfolio</h1>
      </div>
      <div className="">
        <AiOutlineMenuFold className={`absolute top-7 right-7 text-2xl text-[#754ef9] md:hidden cursor-pointer ${hidden || 'hidden'}`} onClick={hiddenController}></AiOutlineMenuFold>
        <RxCross2 className={`absolute  top-7 right-7 text-2xl text-[#754ef9] md:hidden cursor-pointer ${hidden && 'hidden'}` } onClick={hiddenController}></RxCross2>

        <ul className={`font-semibold md:space-x-4 flex flex-col md:block justify-start items-start mt-5 md:mt-0 absolute md:static top-10 bg-slate-100 px-4 md:px-0 transition duration-500 ease-out ${hidden?'  translate-x-full md:translate-x-0 transition duration-1000':' right-2 pb-2'} `} >


          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-[#754ef9] text-[#754ef9]' : ' p-1 border-b-2  hover:border-[#754ef9] hover:text-[#754ef9] transition duration-200 ease-in'} to='/'>Home </NavLink>


          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-[#754ef9] text-[#754ef9]' : ' p-1 border-b-2  hover:border-[#754ef9] hover:text-[#754ef9] transition duration-200 ease-in'} to='about'> About </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-[#754ef9] text-[#754ef9]' : ' p-1 border-b-2  hover:border-[#754ef9] hover:text-[#754ef9] transition duration-200 ease-in'} > Skills </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-[#754ef9] text-[#754ef9]' : ' p-1 border-b-2  hover:border-[#754ef9] hover:text-[#754ef9] transition duration-200 ease-in'} > Project </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'p-1 border-b-2 border-[#754ef9] text-[#754ef9]' : ' p-1 border-b-2  hover:border-[#754ef9] hover:text-[#754ef9] transition duration-200 ease-in'} > Contact </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;