import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
    const [showError, setError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <main className='py-20 px-4 bg-gray-100 border-b-2'>
            <div className="w-full max-w-sm p-6 border bg-white border-gray-200 rounded-lg shadow md:p-8 mx-auto">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h5 className="text-4xl font-bold text-gray-900 text-center">Register</h5>
                    </div>
                    <div>
                        <p className="text-sm text-center text-gray-400 mb-3">Sing up with your social media account</p>
                        <img className='w-8 cursor-pointer mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" placeholder="name@mail.com" required></input>
                        
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                        <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" required></input>
                        
                    </div>
                    <div>
                        <label htmlFor="confirmPass" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                        <input {...register("confirmPass", { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" required></input>
                        
                    </div>
                    <div>
                        <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900">Photo URL</label>
                        <input {...register("photoUrl", { required: true })} type="url" name="password" id="password" placeholder="Photo url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" required></input>
                        
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

                    <Link to='/login'>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-8 text-center">
                            Not registered? <span className="text-orange-600 hover:underline">Create account</span>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Registration;