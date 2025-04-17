"use client";

import Image from "next/image";
import { icon } from "@/assets/images";

const AnimateIcon = () => {
    return (
        <div className="animate-bounce-custom bg-transparent">
            <Image width={284} height={284} src={icon} className="h-auto w-[124px]" alt="Clinimercês logo" priority />
        </div>
    );
};

export default AnimateIcon;
