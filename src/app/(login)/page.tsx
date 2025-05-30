import { LoginForm, ThemeButton } from "@/components";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Clinimercês | Segurança e Medicina do Trabalho",
        description: "",
    };
}

export default async function Page() {
    return (
        <div className="relative flex min-h-[calc(100vh-86px)] w-full max-w-[1920px] flex-col items-center justify-start overflow-hidden">
            <div className="absolute right-4 top-4">
                <ThemeButton />
            </div>
            <LoginForm />
        </div>
    );
}
