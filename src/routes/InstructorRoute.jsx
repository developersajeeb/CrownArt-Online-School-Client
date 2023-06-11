import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

// eslint-disable-next-line react/prop-types
const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-dots w-20"></span>
        </div>
    }
    if (user && isInstructor) {
        return children;
    }

    return <Navigate to='/404' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;