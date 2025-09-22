import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else{
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const defaultTheme = prefersDark ? "dark" : "light";
            setTheme(defaultTheme);
            document.documentElement.classList.add(defaultTheme);
        }   
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme",theme);
    }, [theme]);    

    const toggleTheme = () => {
        setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
    };
    return {theme, toggleTheme};
}