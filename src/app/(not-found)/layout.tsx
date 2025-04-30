import "../globals.css";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Clinimercês | Segurança e Medicina do Trabalho",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
