import React, { type ReactNode, type ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const IconButton = ({ children, ...props }: Props) => {
    return (
        <button
            type="button"
            className="hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-600 dark:hover:bg-gray-500 transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default IconButton;
