import React, { useState } from "react";
import { fetcher } from "../../lib/fetcher";
import { setToken } from "../../lib/auth";
import { Navigate } from "react-router-dom";
import LayoutRegister from "../layout/layoutRegister";
import {useFetchUser} from "../../lib/authContext";

const Register = ({onRegister}) => {
    const {user } = useFetchUser()
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const responseData = await fetcher(
                `http://localhost:1337/api/auth/local/register`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: userData.username,
                        email: userData.email,
                        password: userData.password,
                    }),
                    method: "POST",
                });
                console.log("Response:", responseData);
                setToken(responseData);
                return <Navigate to="/" />
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };


    return (
        <LayoutRegister user={user}>
            <div className="container mx-auto mt-10 popup-container">
                <div className="max-w-md mx-auto popup-content">
                    <div className="text-center">
                        <button className="close-button" onClick={() => onRegister(null)}>
                            Close
                        </button>
                        <h2 className="text-2xl font-semibold mt-4">Register Your Account</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                                Email or Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-gray-700 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="email"
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
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutRegister>

    );
};

export default Register;
