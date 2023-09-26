import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Login from '../../components/login/login';
import logo from '../../spacex_logo.svg';
import Register from '../../components/register/register';
import  { unsetToken } from "../../lib/auth";
import {useFetchUser } from "../../lib/authContext";


const Header = () => {
    const { user } = useFetchUser()
    const [activeForm, setActiveForm] = useState(null);


    const handleLogin = () => {
        setActiveForm(null);

    };

    const handleRegister = () => {
        setActiveForm(null); // Close the form after successful registration
    };

    const handleFormButtonClick = (formName) => {
        setActiveForm(formName);
    };
    console.log('User:', user);
    const logout = () => {
        console.log('Logging out');
        unsetToken();
    };

    return (
        <div className="header flex justify-between mx-4 my-2 flex-shrink-0 navbar-expand-sm navbar-light navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo" width="50" height="50" />
                </Link>
            </div>
            <div className="flex space-x-4">
            {user ? (
                <div>
                    <button className="group relative btn-flat hover:bg-purple-900 hover:text-white" onClick={logout}>
                        Logout
                    </button>
                </div>
            ) : (
                <>

                    {activeForm === 'login' && <Login onLogin={handleLogin} />}
                    {activeForm === 'register' && (<Register onRegister={handleRegister} onLogin={handleLogin}/>)}

                    {!activeForm && (
                        <>
                <button
                    className="btn-flat hover:bg-purple-900 hover:text-white"
                    onClick={() => handleFormButtonClick('login')}
                >Login</button>
                <button
                    className="btn-flat hover:bg-purple-900 hover:text-white"
                    onClick={() => handleFormButtonClick('register')}
                >Register</button>
            </>
        )
    }
</>
)}</div>
        </div>
    );
};


export default Header;
