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
                    "text-semibold flex h-12 w-full rounded-2xl border-none bg-secondary autofill:bg-secondary px-3 py-1 text-base font-semibold text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray/80 focus:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
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
