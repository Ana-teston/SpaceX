import Cookies from "js-cookie";
import {fetcher} from "./fetcher";

export const setToken = (data) => {
    if (typeof window === "undefined") {
        return;
    }
    Cookies.set("id", data.user.id);
    Cookies.set("username", data.user.username);
    Cookies.set("jwt", data.jwt);

    if (Cookies.get("username")) {
        window.location.reload();
    }
};

export const unsetToken = () => {
    if (typeof window === "undefined") {
        return;
    }
    Cookies.remove("id");
    Cookies.remove("username");
    Cookies.remove("jwt");

    window.location.reload();
}
export const getUserFromLocalCookie = () => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
        return fetcher(`https://hidden-crag-41367-08ec44186e31.herokuapp.com/api/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`,
            },
        })
            .then((data) => {
                return data.username;
            }).catch((error) =>
                console.error(error));
    } else {
        return;
    }
};

export const getIdFromLocalCookie = () => {
    return Cookies.get("id");
};

export const getTokenFromLocalCookie = () => {
    return Cookies.get("jwt");
};

export const getTokenFromServerCookie = (req) => {
    if (!req.headers.cookie || "") {
        return undefined;
    }

    const jwtCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim()
        .startsWith("jwt="));
    if (!jwtCookie) {
        return undefined;
    }
    const jwt = jwtCookie.split("=")[1];
    return jwt;
};

export const getIdFromServerCookie = (req) => {
    if (!req.headers.cookie || "") {
        return undefined;
    }

    const idCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim()
            .startsWith("id="));
    if (!idCookie) {
        return undefined;
    }
    const id = idCookie.split("=")[1];
    return id;
};