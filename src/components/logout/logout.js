import React, { useState } from 'react';
import { unsetToken } from '../../lib/auth';
import { Navigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const [logoutSuccess, setLogoutSuccess] = useState(false);

    const logout = () => {
        unsetToken();
        setLogoutSuccess(true);
        onLogout();
    };

    if (logoutSuccess) {
        return <Navigate to="/login" />; // Redirect to the login page after logging out
    }

    return (
        <a className='btn btn-flat' onClick={logout}>
            Logout
        </a>
    );
};

export default Logout;

