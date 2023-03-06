import React from "react";

import styles from "./Navbar.module.css";

import { HiMenu, BsMoonFill } from "react-icons/all"
import ThemeToggler from "../ThemeToggler/ThemeToggler";

function Navbar() {
    return (
        <div className={`${styles.navbarContainer} bg-slate-200 text-slate-600 border-b border-4 border-slate-300`}>
            <div className={styles.navbarContent}>
                <div className={styles.navbarMainContent}>
                    <button className={`${styles.navbarButton} border-solid border-slate-600`}>
                        <HiMenu fontSize={30} />
                    </button>
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

