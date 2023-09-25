import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "./auth";

let userState;

export const UserContext = createContext({ user: null, loading: false });

export const UserProvider = ({ value, children }) => {
    const { user } = value;
    console.log("user", user)

    useEffect(() => {
        if (!userState && user) {
            userState = user;
        }
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);

export const useFetchUser = () => {
    const [ data, setUser ] = useState({
        user: userState || null,
        loading: userState === undefined,
    });

    useEffect(() => {
        if (userState !== undefined) {
            return;
        }
        let isMounted = true;

        const user = getUserFromLocalCookie();
        if (isMounted) {
            setUser({user, loading: false});
        }
        return () => {
            isMounted = false;
        }
    }, [userState]);

    return data;
}