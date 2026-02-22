import React, { useCallback, useEffect, useState } from "react";
import { BsSunFill, BsSun, BsMoonFill } from "react-icons/bs";
import IconButton from "./IconButton";

const LampButton = () => {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    const switchDarkModes = useCallback(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        // Astro-specific dark mode toggling according to Shadcn guidelines
        const isDark = newTheme === "dark";
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");

        // Optional: save to localStorage
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("theme", newTheme);
        }
    }, [theme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || storedTheme === "light") {
            setTheme(storedTheme);
        } else {
            setTheme("light");
        }
    }, []);

    if (!theme) return null;

    return (
        <IconButton onClick={switchDarkModes}>
            {theme === "dark" ? (
                <BsSun color="gray" className="w-5 h-5" />
            ) : (
                <BsMoonFill color="gray" className="w-5 h-5" />
            )}
        </IconButton>
    );
};

export default LampButton;
