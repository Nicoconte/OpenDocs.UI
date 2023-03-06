import React from "react";
import { BsMoonFill } from "react-icons/all";

import styles from "./ThemeToggler.module.css";

function ThemeToggler() {
    return (
        <button className={`${styles.themeTogglerButton} text-slate-50 bg-cyan-900`}>
            <BsMoonFill fontSize={20} />
        </button>
    )
}

export default ThemeToggler;