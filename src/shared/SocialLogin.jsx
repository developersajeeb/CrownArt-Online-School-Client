import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";

const SocialLogin = () => {
    const { googleSingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student', photo: loggedInUser.photoURL }
                fetch('https://assigment-12-server-nu.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Welcome Back!',
                            'Login successful',
                            'success'
                        )
                        navigate(from, { replace: true });
                    })

                    const loggedUser = {
                        email: loggedInUser.email
                    }
                    console.log(loggedUser);
        
                    fetch('https://assigment-12-server-nu.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(loggedUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token);
                    })


            })
    }
    return (
        <img onClick={handleGoogleSingIn} className='w-8 cursor-pointer mx-auto mt-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
    );
};

export default SocialLogin;