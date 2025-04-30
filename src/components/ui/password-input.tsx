"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { RiEyeFill, RiEyeCloseLine } from "@remixicon/react";

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        return (
            <div className="relative w-full">
                <div
                    className="absolute right-3 top-1/2 z-[10] flex h-full -translate-y-1/2 transform cursor-pointer select-none items-center justify-center"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <RiEyeFill className="h-5 w-5 text-slate-400 dark:text-white" />
                    ) : (
                        <RiEyeCloseLine className="h-5 w-5 text-slate-400 dark:text-white" />
                    )}
                </div>
                <input
                    autoComplete="off"
                    autoCorrect="off"
                    type={showPassword ? "text" : "password"}
                    className={cn(
                        "text-semibold flex h-12 w-full rounded-2xl border-none bg-gray/40 px-3 py-1 text-base font-semibold text-secondary dark:text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus:ring-green-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-strong disabled:cursor-not-allowed disabled:opacity-50 dark:bg-secondary dark:file:text-slate-50 dark:placeholder:text-gray/80 dark:autofill:bg-secondary dark:focus:ring-white dark:focus-visible:ring-white",
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
