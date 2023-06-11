import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-dots w-20"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/404' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;