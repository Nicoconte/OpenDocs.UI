import React from "react";
import { BsMoonFill } from "react-icons/all";
import useThemeTogglerStore from "../../stores/themeToggler.store";

import styles from "./ThemeToggler.module.css";

function ThemeToggler() {
    const [toggle, theme] = useThemeTogglerStore((state) => [state.toggle, state.theme]);

    function handleToggle() {
        toggle();

        let nextTheme = theme;

        if (nextTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    return (
        <button onClick={handleToggle}  className={`${styles.themeTogglerButton} text-slate-50 bg-cyan-900`}>
            <BsMoonFill fontSize={20} />
        </button>
    )
}

export default ThemeToggler;