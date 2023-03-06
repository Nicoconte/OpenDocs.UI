import React from "react";

import styles from "./Navbar.module.css";

import { HiMenu, BsMoonFill } from "react-icons/all"

function Navbar() {
    return (
        <div className={`${styles.navbarContainer} bg-slate-200 text-slate-600 border-b border-4 border-slate-300`}>
            <div className={styles.navbarContent}>
                <div className={styles.navbarMainContent}>
                    <button className={`${styles.navbarButton} border-solid border-slate-600`}>
                        <HiMenu fontSize={30} />
                    </button>
                    <h1>OpenDocs</h1>
                    <span>(v.0.1)</span>                
                </div>
                <div className={styles.navbarThemeToggler}>
                    <button className="text-slate-600">
                        <BsMoonFill fontSize={30} />
                    </button>
                </div>                
            </div> 
        </div>
    )
}

export default Navbar;

