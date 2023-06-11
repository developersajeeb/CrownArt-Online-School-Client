import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/crown-logo.png';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { FaUsersCog, FaArrowLeft, FaVideo, FaHome } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashboardMain = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4 md:p-14">
                <label htmlFor="my-drawer-2" className="primary-btn drawer-button lg:hidden flex items-center gap-2 mb-8"><FaArrowLeft /> Open Menu</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#3F4138] text-white">
                    <Link to='/'><img className="w-56 mx-auto" src={logo} alt="" /></Link>

                    <div className="text-center mb-14 mt-16">
                        <img className="w-32 h-32 rounded-full mx-auto mb-3" src={user?.photoURL} alt="" />
                        <h3 className="text-2xl">{user?.displayName}</h3>
                        <p className="text-gray-300">{user?.email}</p>
                    </div>

                    <div className="border-t border-zinc-500 pt-6 text-base">
                        {
                            isAdmin ? <>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                    <li className='hover:bg-[#2F2B27] py-1 px-2 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'><p><FaHome /> Main Home</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/manage-classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                    <li className='hover:bg-[#2F2B27] py-1 px-2 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'><p><FaVideo/> Manage Classes</p></li>
                                </NavLink>
                                <NavLink to='/dashboard/manage-users' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                    <li className='hover:bg-[#2F2B27] py-1 px-2 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'><p><FaUsersCog/> Manage Users</p></li>
                                </NavLink>
                            </> : isInstructor ? <>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                    <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>Main Home</li>
                                </NavLink>
                                <NavLink to='/dashboard/add-class' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                    <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>Add Class</li>
                                </NavLink>
                                <NavLink to='/dashboard/my-classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                    <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>My Classes</li>
                                </NavLink>
                            </> :
                                <>
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                        <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>Main Home</li>
                                    </NavLink>
                                    <NavLink to='/dashboard/my-selected-classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                        <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>My Selected Classes</li>
                                    </NavLink>
                                    <NavLink to='/dashboard/my-enrolled-classes' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                        <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>My Enrolled Classes</li>
                                    </NavLink>
                                    <NavLink to='/dashboard/payment-history' className={({ isActive }) => isActive ? 'mini-header-color font-medium ' : 'text-white'}>
                                        <li className='hover:bg-[#2F2B27] py-3 px-6 rounded-full hover:shadow-xl shadow-slate-100 duration-200 cursor-pointer'>Payment History</li>
                                    </NavLink>
                                </>
                        }

                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashboardMain;