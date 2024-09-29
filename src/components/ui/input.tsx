import * as React from "react";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconType;
  endIcon?: IconType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
            <StartIcon className="text-xl text-gray-500" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-yellow-950 dark:ring-offset-zinc-950 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-blue-300 transition-all ease-in-out",
            startIcon && "pl-8",
            endIcon && "pr-8",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2">
            <EndIcon className="text-xl" />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
