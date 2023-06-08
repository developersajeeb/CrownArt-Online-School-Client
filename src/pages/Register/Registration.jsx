import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Registration = () => {
    const {createUser} = useContext(AuthContext);

    const [showError, setError] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPass) {
            setError(true); // Set error state to true
            return;
        }
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    const password = watch("password");
    const confirmPass = watch("confirmPass");


    return (
        <main className="py-20 px-4 bg-gray-100 border-b-2">
            <div className="w-full max-w-md p-6 border bg-white border-gray-200 rounded-lg shadow md:p-8 mx-auto">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h5 className="text-4xl font-bold text-gray-900 text-center">Register</h5>
                    </div>
                    <div>
                        <p className="text-sm text-center text-gray-400 mb-3">Sign up with your social media account</p>
                        <img className="w-8 cursor-pointer mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Your Email
                        </label>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" placeholder="name@mail.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                            Your Password
                        </label>
                        <input
                            {...register("password", {
                                required: true,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                            })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className={`bg-gray-50 border text-gray-900 text-sm px-8 rounded-full py-3 block w-full`}
                            required
                        />
                        {errors.password?.type === 'pattern' ?
                            <span className="text-sm text-red-500">Password must one: A,a,#,min 6 characters</span> : ''}
                    </div>
                    <div>
                        <label htmlFor="confirmPass" className="block mb-2 text-sm font-medium text-gray-900">
                            Confirm Password
                        </label>
                        <input
                            {...register("confirmPass", {
                                required: true,
                                validate: (value) => value === password || "Passwords do not match",
                            })}
                            type="password"
                            name="confirmPass"
                            id="confirmPass"
                            placeholder="••••••••"
                            className={`bg-gray-50 border text-gray-900 text-sm px-8 rounded-full py-3 block w-full`}
                            required
                        />
                        {errors.confirmPass && <span className="text-red-500">Passwords do not match</span>}
                    </div>
                    <div>
                        <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900">
                            Photo URL
                        </label>
                        <input {...register("photoUrl", { required: true })} type="url" name="photoUrl" id="photoUrl" placeholder="Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-8 rounded-full py-3 block w-full" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 text-orange-500"
                                />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="ml-auto text-sm primary-color hover:underline">
                            Lost Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="primary-btn w-full"
                        disabled={confirmPass !== password || errors.password || errors.confirmPass || showError}
                    >
                        Register
                    </button>
                    <Link to="/login">
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-8 text-center">
                            Already registered? <span className="text-orange-600 hover:underline">Login</span>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Registration;
