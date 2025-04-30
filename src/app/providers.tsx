"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/theme-provider";
import { AuthContextProvider } from "@/contexts/auth";
import { ReactNode } from "react";
interface ProvidersProps {
    children: ReactNode;
}

const MINUTE = 60 * 1000;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 0 * MINUTE,
            staleTime: 0 * MINUTE,
            retry: true,
        },
    },
});

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>{children}</AuthContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};
