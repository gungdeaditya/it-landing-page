import React, { type AnchorHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    children: ReactNode;
    isActive?: boolean;
};

export default function NavLink({
    className,
    href,
    children,
    isActive,
    ...otherProps
}: Props) {
    return (
        <a
            className={twMerge(
                "relative text-gray-500 transition hover:text-gray-500/75",
                isActive ? "text-primary-500" : "",
                className
            )}
            href={href}
            {...otherProps}
        >
            {children}
            {isActive && (
                <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </a>
    );
}
