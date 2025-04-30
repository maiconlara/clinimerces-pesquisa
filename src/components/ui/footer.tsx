import { ThemeButton } from "./theme-button";

export const Footer = () => {
    return (
        <div className="flex h-[86px] w-full max-w-[1920px] flex-row items-center justify-center gap-3 bg-transparent font-nunito text-slate-400 dark:text-gray">
            <p className="cursor-default text-sm">
                Clinimercês © 2025 Todos os direitos reservados.
            </p>
        </div>
    );
};
