
import { Metadata } from "next";
import { Galery, Hero } from "@/components";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Clinimercês | Segurança e Medicina do Trabalho",
        description: "",
    };
}

export default async function Page() {
    return (
        
        <div className="flex min-h-[calc(100vh-86px)] flex-col w-full items-center justify-start overflow-hidden max-w-[1920px]">
            <Hero />
            <Galery />
        </div>
    );
}
