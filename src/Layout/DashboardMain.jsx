import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/crown-logo.png';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { FaUsers, FaUsersCog, FaArrowLeft } from "react-icons/fa";

const DashboardMain = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4 md:p-14">
                <label htmlFor="my-drawer-2" className="primary-btn drawer-button lg:hidden flex items-center gap-2 mb-8"><FaArrowLeft/> Open Menu</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#3F4138] text-white">
                    <Link to='/'><img className="w-56 mx-auto" src={logo} alt="" /></Link>

                    <div className="text-center mb-14 mt-16">
                        <img className="w-32 h-32 rounded-full mx-auto mb-3" src={user?.photoURL} alt="" />
                        <h3 className="text-2xl">{user?.displayName}</h3>
                    </div>
                
                    <div className="border-t border-zinc-500 pt-6">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                            <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>Main Home</li>
                        </NavLink>
                        <NavLink to='/dashboard/all-classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                            <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>All Classes</li>
                        </NavLink>
                        <NavLink to='/dashboard/manage-user' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                            <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>Manage Users</li>
                        </NavLink>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashboardMain;