import React, { useEffect, useState } from "react";
import { BsSunFill, BsSun, BsMoonFill } from "react-icons/bs";
import IconButton from "./IconButton";

const LampButton = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Initial theme check
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    const switchDarkModes = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        // Astro-specific dark mode toggling according to Shadcn guidelines
        const isDark = newTheme === "dark";
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");

        // Optional: save to localStorage
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    };

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
