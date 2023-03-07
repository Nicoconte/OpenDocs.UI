import React, { useEffect } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/all";
import useThemeTogglerStore from "../../stores/themeToggler.store";

import styles from "./ThemeToggler.module.css";

function loadTheme(theme: string) {
    if (theme === "dark") {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

function ThemeToggler() {
    const [toggleTheme, theme] = useThemeTogglerStore((state) => [state.toggleTheme, state.theme]);

    useEffect(() => {
        loadTheme(theme);
    }, [theme])

    return (
        <button onClick={toggleTheme}  className={`${styles.themeTogglerButton} text-slate-50 ${theme === "light" ? "bg-cyan-900" : "bg-orange-400"}`}>
            { theme === "light" ? <BsMoonFill fontSize={20} /> : <BsFillSunFill fontSize={20} /> }
        </button>
    )
}

export default ThemeToggler;