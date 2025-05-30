"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import useCookie from "@/utils/hooks/useCookies";
import { User } from "@/types/user";
import api from "@/lib/api";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface UserSession {
    token: string;
    token_type: string;
}

interface GetUser {
    data: User;
}

export type AuthContextData = {
    userSession: UserSession | null;
    user: User | null;
    login: (loginData: UserSession) => void;
    logout: () => void;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const { push } = useRouter();

    const [userSession, setUserSession] = useState<UserSession | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const { getCookie, removeCookie, setCookie } = useCookie();
    //Belogic@2025ClM3
    // console.log(user);

    const getUserSession = async (): Promise<User | null | undefined> => {
        const token = getCookie("clinimerces_user_session");
        try {
            const { data } = await api.get<GetUser>(`/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return data.data;
        } catch (error: any) {
            console.log("error");
            return null;
        }
    };

    useEffect(() => {
        if (user) return;
        const token = getCookie("clinimerces_user_session");
        if (token) {
            setUserSession({ token, token_type: "Bearer" });
            getUserSession()
                .then((user) => {
                    if (user) {
                        setUser(user);
                        push("/home")
                    }
                })
                .catch((error) => {
                    console.log("error", error);
                });
        }
    }, [user]);

    const login = useCallback(
        async (loginData: UserSession) => {
            setUserSession(loginData);
            setCookie("clinimerces_user_session", loginData.token);
            try {
                const user = await getUserSession();
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        [setCookie],
    );

    const logout = useCallback(() => {
        setUserSession(null);
        setUser(null);
        removeCookie("clinimerces_user_session");
    }, [removeCookie]);

    return <AuthContext.Provider value={{ userSession, user, login, logout }}>{children}</AuthContext.Provider>;
}
