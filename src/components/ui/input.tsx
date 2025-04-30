import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                autoComplete="off"
                autoCorrect="off"
                type={type}
                className={cn(
                    "text-semibold flex h-12 w-full rounded-2xl border-none bg-gray/40 dark:bg-secondary dark:autofill:bg-secondary px-3 py-1 text-base font-semibold text-secondary dark:text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 dark:placeholder:text-gray/80 dark:focus:ring-white focus:ring-green-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-strong dark:focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50  dark:file:text-slate-50  ",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

export { Input };
