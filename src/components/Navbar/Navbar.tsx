import React from "react";

import styles from "./Navbar.module.css";

import ThemeToggler from "../ThemeToggler/ThemeToggler";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Navbar() {
    return (
        <div className={`${styles.navbarContainer} bg-slate-200 dark:bg-cyan-800 text-slate-600 dark:text-slate-50 dark:border-cyan-700 border-b-2 border-slate-300`}>
            <div className={styles.navbarContent}>
                <div className={styles.navbarMainContent}>
                    <BurgerMenu />
                    <h1>OpenDocs</h1>
                </div>
                <div className={styles.navbarThemeToggler}>
                    <ThemeToggler />
                </div>                
            </div> 
        </div>
    )
}

export default Navbar;

