import React, { type AnchorHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
                "text-gray-500 transition hover:text-gray-500/75",
                isActive && "text-primary-500",
                className
            )}
            href={href}
            {...otherProps}
        >
            {children}
        </a>
    );
}
