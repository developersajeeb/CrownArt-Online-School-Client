import { useContext, useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaUserFriends } from "react-icons/fa";
import logo from '../assets/crown-logo.png'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    // const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    // const handleLogOut = () => {
    //     logOut()
    //         .then()
    //         .catch(error => console.log(error))
    // }

    return (
        <nav className="bg-[#3F4138] border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-1">
                <Link to='/'>
                    <img className='w-52' src={logo} alt="" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center ml-3 text-sm text-white rounded-lg md:hidden border-2 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/instructors' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                            <li>Instructors</li>
                        </NavLink>
                        <NavLink to='/classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                            <li>Classes</li>
                        </NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                            <li>Dashboard</li>
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                            <li>About</li>
                        </NavLink>
                        
                            {/* <img className='w-10 h-10 object-cover rounded-full cursor-pointer' alt="User" />
                            <button className='border-2 p-2 rounded-md'><FaSignOutAlt></FaSignOutAlt></button> */}
                       
                            <NavLink to='/login'>
                            <li className='primary-btn flex items-center gap-2'><FaUserFriends /> Login</li>
                            </NavLink>
                            
                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-3 w-40 border text-center border-gray-300 rounded-lg bg-[#3F4138] md:hidden absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'hidden'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/instructors' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                        <li>Instructors</li>
                    </NavLink>
                    <NavLink to='/classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                        <li>Classes</li>
                    </NavLink>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                        <li>Dashboard</li>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                        <li>About</li>
                    </NavLink>
                    
                            {/* <img className='w-10 h-10 object-cover rounded-full cursor-pointer' alt="User" />
                            <button className='border-2 p-2 rounded-md flex justify-center'><FaSignOutAlt></FaSignOutAlt></button> */}
                       
                            <NavLink to='/login'>
                                <li className='primary-btn flex items-center gap-2'><FaUserFriends /> Login</li>
                            </NavLink>
                    
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;