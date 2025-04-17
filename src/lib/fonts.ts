import { Nunito_Sans } from "next/font/google";

export const nunito = Nunito_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-nunito",
});


export const fontVariables = [nunito.variable].join(" ");
