"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import useCookie from "@/utils/hooks/useCookies";

interface User {
    token: string;
    token_type: string;
}


export type AuthContextData = {
    user: User | null;
    login: (loginData: User) => void;
    logout: () => void;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const { getCookie, removeCookie, setCookie } = useCookie();

    useEffect(() => {
        const token = getCookie("clinimerces_user_session");
        if (token) {
            setUser({ token, token_type: "Bearer" });
        }
    }, [getCookie]);

    const login = useCallback(
        async (loginData: User) => {
           setUser(loginData)
        },
        [setCookie],
    );

    const logout = useCallback(() => {
        setUser(null);
        removeCookie("clinimerces_user_session");
    }, [removeCookie]);

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
