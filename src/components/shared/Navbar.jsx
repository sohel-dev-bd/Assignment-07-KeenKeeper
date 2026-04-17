import React from 'react';
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">

            <div className='container mx-auto flex justify-between'>

                <div className="navbar-start">
                    <img src={logo} alt="This is a navbar icon or logo" />
                </div>

                <div className="navbar-end">

                    <ul className="hidden lg:flex gap-4 items-center">
                        <NavLink
                            to={'/'}
                            className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                        ><RiHome2Line /> Home </NavLink>

                        <NavLink
                            to={'/timeLineHistory'}
                            className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                        ><RiTimeLine /> Timeline </NavLink>

                        <NavLink
                            to={'/stats'}
                            className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                        ><ImStatsDots /> Stats </NavLink>
                    </ul>

                    <div className="dropdown dropdown-left lg:hidden">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">

                            <NavLink
                                to={'/'}
                                className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                            ><RiHome2Line /> Home </NavLink>

                            <NavLink
                                to={'/timeLineHistory'}
                                className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                            ><RiTimeLine /> Timeline </NavLink>

                            <NavLink
                                to={'/stats'}
                                className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-[#244D3F] text-white' : ''}`}
                            ><ImStatsDots /> Stats </NavLink>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Navbar;