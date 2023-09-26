import React, { useState } from 'react';
import { fetcher } from '../../lib/fetcher';
import { setToken } from '../../lib/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        identifier: '',
        password: '',
    });
    const [ setShowLoginForm ] = useState(null)
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleLoginChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

     const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            const responseData = await fetcher(`http://localhost:1337/api/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: data.identifier,
                    password: data.password,
                }),
            });

            if (responseData && responseData.user) {
                setToken(responseData);
                setLoginSuccess(true);
            } else {
                console.error('Invalid responseData:', responseData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loginSuccess) {
        return <Navigate to="/" />;
    }

    const handlePopupClose = () => {
        setShowLoginForm(false); // Close the login form when needed
    };

    return (
        <div className="container mx-auto mt-10 popup-container">
            <div className="max-w-md mx-auto popup-content">
                <div className="text-center">
                    <button className="close-button" onClick={handlePopupClose}>
                        Close
                    </button>
                    <h2 className="text-2xl font-semibold mt-4">Login to Your Account</h2>
                </div>
                <form onSubmit={handleSubmitLogin} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                            Email or Username
                        </label>
                        <input
                            type="text"
                            name="identifier"
                            id="identifier"
                            value={data.identifier}
                            onChange={handleLoginChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-gray-700 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={handleLoginChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm text-gray-700 border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
