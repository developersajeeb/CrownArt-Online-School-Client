import { useContext, useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaUserFriends } from "react-icons/fa";
import logo from '../assets/crown-logo.png'
import { AuthContext } from '../providers/AuthProviders';
import { ThemeContext } from '../components/ThemeContext/ThemeContext';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setOpen] = useState(false);

    const { themeColor, handleThemeSwitch } = useContext(ThemeContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

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
                        {
                            user && <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                                <li>Dashboard</li>
                            </NavLink>
                        }
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'mini-header-color font-medium' : 'text-white'}>
                            <li>About</li>
                        </NavLink>
                        {
                            user ?
                                <>
                                    <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src={user.photoURL} alt="User" />
                                    <button onClick={handleLogOut} className={`primary-btn flex items-center gap-2 ${themeColor === 'dark' ? 'bg-gray-200' : 'bg-gray-800'}`}><FaSignOutAlt></FaSignOutAlt> Logout</button>
                                </>
                                :
                                <>
                                    <NavLink to='/login'>
                                        <li className='primary-btn flex items-center gap-2'><FaUserFriends /> Login</li>
                                    </NavLink>
                                </>
                        }
                        <li className='text-center'>
                            <input onClick={handleThemeSwitch} type="checkbox" className="toggle" defaultChecked />
                            <p className='text-sm text-gray-400'>Dark/Light</p>
                        </li>
                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-3 w-44 border text-center border-gray-300 rounded-lg bg-[#3F4138] md:hidden absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'hidden'}`}>
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
                    {
                        user ?
                            <>
                                <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src={user.photoURL} alt="User" />
                                <button onClick={handleLogOut} className='primary-btn flex items-center gap-2'><FaSignOutAlt></FaSignOutAlt> Logout</button>
                            </>
                            :
                            <>
                                <NavLink to='/login'>
                                    <li className='primary-btn flex items-center gap-2'><FaUserFriends /> Login</li>
                                </NavLink>
                            </>
                    }
                    <li className='text-center'>
                        <input type="checkbox" className="toggle" defaultChecked />
                        <p className='text-sm text-gray-400'>Dark/Light</p>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;