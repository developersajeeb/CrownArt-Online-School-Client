import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

// eslint-disable-next-line react/prop-types
const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }
    if (user && isInstructor) {
        return children;
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;