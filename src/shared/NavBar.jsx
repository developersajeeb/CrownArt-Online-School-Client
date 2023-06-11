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
            .then(() => {
                localStorage.removeItem('access-token');
            })
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
                        <label className="swap swap-rotate" onClick={handleThemeSwitch}>
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />
                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-4 w-44 border text-center border-gray-300 rounded-lg bg-[#3F4138] md:hidden absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'hidden'}`}>
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
                                <img className='w-10 h-10 object-cover rounded-full cursor-pointer mx-auto' src={user.photoURL} alt="User" />
                                <button onClick={handleLogOut} className='primary-btn flex items-center gap-2'><FaSignOutAlt></FaSignOutAlt> Logout</button>
                            </>
                            :
                            <>
                                <NavLink to='/login'>
                                    <li className='primary-btn flex items-center gap-2'><FaUserFriends /> Login</li>
                                </NavLink>
                            </>
                    }
                    <label className="swap swap-rotate" onClick={handleThemeSwitch}>
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />
                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;