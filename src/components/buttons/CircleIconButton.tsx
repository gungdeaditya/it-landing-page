import React, { type ReactNode, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const CircleIconButton = ({ className, children, ...props }: Props) => {
    return (
        <button
            type="button"
            className={twMerge(
                `transition-all flex justify-center items-center w-8 h-8 text-primary-500 hover:text-white border border-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-blue-800 ${className}`
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default CircleIconButton;
