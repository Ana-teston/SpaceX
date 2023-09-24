import React, {useState} from 'react';
import logo from '../../spacex_logo.svg';
import "./header.styles.css";
import { Link } from "react-router-dom";
import {setToken, unsetToken} from "../../lib/auth";
import {fetcher} from "../../lib/fetcher";
import { useUser } from "../../lib/authContext";



const Header = () => {
    console.log("header component rendered");

    const [data, setData] = useState({
        identifier: "",
        password: ""
    });
    const [showLoginForm, setShowLoginForm] = useState();
    const { user, loading } = useUser();
    console.log("User:", user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const responseData = await fetcher(`${process.env.PUBLIC_STRAPI_URL}/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier: data.identifier,
                    password: data.password,
                }),
            }
        );
        console.log(responseData);
        setToken(responseData)
    };

    const logout = () => {
        unsetToken();
    };
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };
    console.log("Header component rendered");

    const handleLoginClick = () => {
        setShowLoginForm(true); // Show the login form when the "Login" button is clicked
    };
    const handlePopupClose = () => {
        setShowLoginForm(false); // Close the login form when needed
    };

    return (
        <>
            <div className="header navbar-expand-sm navbar-light navbar">
                <div className="logo-container">
                    <Link href="/">
                        <img src={logo} alt="Logo" width="50" height="50"/>
                    </Link>
                </div>
                {user && !loading ? (
                    <div>
                        <a className='btn btn-flat' onClick={logout}>Logout</a>
                    </div>
                ) : (
                    <div>
                        {/* Render the "Login" button when there is no user */}
                        <button className='btn btn-flat' onClick={handleLoginClick}>Login</button>
                    </div>
                )}
            </div>
            {showLoginForm && ( // Conditionally render the login form based on showLoginForm
                <div className="container mx-auto mt-10 popup-container">
                    <div className="max-w-md mx-auto popup-content">
                        <div className="text-center">
                            <button className="close-button" onClick={handlePopupClose}>
                                Close
                            </button>
                            <h2 className="text-2xl font-semibold mt-4">Login to Your Account</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                                    Email or Username
                                </label>
                                <input
                                    type="text"
                                    name="identifier"
                                    id="identifier"
                                    value={data.identifier}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
            )}
        </>
    );
};

export default Header;
