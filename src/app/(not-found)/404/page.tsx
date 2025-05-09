import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="bg-blue flex h-screen max-h-screen w-full max-w-[1920px] flex-col items-center justify-center bg-green-medium dark:bg-primary">
            <div className="flex h-full w-full flex-col items-center justify-center overflow-y-hidden">
                <div className="flex w-full max-w-[86vw] flex-col items-end gap-10">
                    <div className="flex max-w-max flex-col gap-10">
                        <p className="font-regular cursor-default text-center font-nunito text-2xl text-white md:text-start md:text-4xl lg:text-5xl">
                            Ops! Essa página não existe.
                        </p>
                        <div className="flex w-full flex-col items-center md:items-start">
                            <Link
                                href="/"
                                className="left-28 flex h-11 min-w-max max-w-max cursor-pointer select-none flex-row items-center justify-center gap-2 rounded-full bg-lines px-5 transition-colors hover:bg-lines/80"
                            >
                                <p className="font-nunito text-sm font-extrabold text-white md:text-[17px]">
                                    Ir para página inicial
                                </p>
                                <RiArrowRightLine size={14} className="text-white transition-colors" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[86px] w-full max-w-[1920px] flex-row items-center justify-center gap-3 bg-green-medium dark:bg-primary font-nunito text-white dark:text-gray">
            <p className="cursor-default text-sm">
                Clinimercês © 2025 Todos os direitos reservados.
            </p>
        </div>
        </div>
    );
};

export default NotFound;
