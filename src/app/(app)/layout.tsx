import { Footer } from "@/components";
import "../globals.css";
import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SuspenseProvider } from "../suspense-provider";
import { Navbar } from "@/components/ui/navbar";
import { cookies } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Clinimercês | Segurança e Medicina do Trabalho",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const cookieStore = cookies();
    const token = cookieStore.get("clinimerces_user_session")?.value;
    console.log("TOKEN DO COOKIE:", token);
    return (

        <SuspenseProvider>
            {token && (<Navbar />)}
            {children}
            <Footer />
        </SuspenseProvider>
    );
}
