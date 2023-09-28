import React from "react";
import Header from "../../routes/header/header";
import {UserProvider} from "../../lib/authContext";

const Layout = ({ children, user }) => {
    return (
        < UserProvider value={{user}}>
            <Header user={user}/>
            <main className="px-4">
                <div className="lg:flex lg:justify-center lg:items-center mx-auto w-full  rounded-lg p-4 sm:p-8">
                    <div className="font-medium">{children}</div>
                </div>
            </main>
        </UserProvider>
    )
}

export default Layout;