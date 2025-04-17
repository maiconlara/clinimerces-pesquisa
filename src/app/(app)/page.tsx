import { LoginForm } from "@/components";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Clinimercês | Segurança e Medicina do Trabalho",
        description: "",
    };
}

export default async function Page() {
    return (
        <div className="flex min-h-[calc(100vh-86px)] w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden">
            <LoginForm />
        </div>
    );
}
