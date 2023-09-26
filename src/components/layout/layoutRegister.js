import React from "react";
import Header from "../../routes/header/header";
import {UserProvider} from "../../lib/authContext";

const LayoutRegister = ({ children, user }) => {
    return (
        < UserProvider value={{user}}>
            <main className="px-4">
                <div className="lg:flex lg:justify-center lg:items-center mx-auto w-full lg:w-2/4 rounded-lg p-4 lg:p-16">
                    <div className="font-medium">{children}</div>
                </div>
            </main>
        </UserProvider>
    )
}

export default LayoutRegister;