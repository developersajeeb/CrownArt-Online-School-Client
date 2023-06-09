import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    const {singIn, googleSingIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [firebaseError, setFirebaseError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        singIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire(
                'Welcome Back!',
                'Login successful',
                'success'
              )
              setFirebaseError('');
              navigate(from, {replace: true});
        })
        .catch(error => setFirebaseError(error))
    };

    const handleGoogle = () => {
        googleSingIn()
            .then(result => {
                console.log('done', result);
                Swal.fire(
                    'Welcome Back!',
                    'Login successful',
                    'success'
                  )
                  navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className='py-20 px-4 bg-gray-100 border-b-2'>
            <div className="w-full max-w-md p-6 border bg-white border-gray-200 rounded-lg shadow md:p-8 mx-auto">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h5 className="text-4xl font-bold text-gray-900 text-center">Sign In</h5>
                    </div>
                    <div>
                        <p className="text-sm text-center text-gray-400 mb-3">Sing in with your social media account</p>
                        <img onClick={handleGoogle} className='w-8 cursor-pointer mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" placeholder="name@mail.com" required></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <div className="flex items-center">
                            <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" required></input>
                            <span className="-ml-8 cursor-pointer" onClick={handleTogglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 text-orange-500"></input>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm primary-color hover:underline">Lost Password?</a>
                    </div>
                    <button type="submit" className="primary-btn w-full">Login to your account</button>
                    {firebaseError ? <p className="text-center text-red-500">User not found with this email & password</p> : ''}

                    <Link to='/registration'>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-8 text-center">
                            Not registered? <p className="text-orange-600 hover:underline inline-block">Create account</p>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Login;