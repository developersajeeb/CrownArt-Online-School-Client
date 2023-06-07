import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section>
            <div className="container min-h-screen mx-auto md:flex gap-12 items-center justify-center p-8 md:p-28">
                <div>
                    <p className="text-sm font-medium primary-color ">404 error</p>
                    <h1 className="mt-3 text-5xl font-semibold text-gray-800">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesnt exist.Here are some helpful links:</p>

                    <div className="mt-6">
                        <Link to='/'>
                            <button className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Go Home</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="mt-10 md:mt-0">
                    <img src="https://merakiui.com/images/components/illustration.svg" alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;