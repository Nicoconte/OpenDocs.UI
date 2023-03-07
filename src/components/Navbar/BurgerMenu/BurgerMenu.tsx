import React from "react";
import { HiMenu } from "react-icons/all";
import useMenuTogglerStore from "../../../stores/menuToggler.store";

import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
    const toggleMenu = useMenuTogglerStore((state) => state.toggleMenu);

    function handleMenuToggle() {
        toggleMenu();
    }

    return (
        <button onClick={handleMenuToggle}  className={`${styles.burgerMenuButton} border-solid border-slate-600`}>
            <HiMenu fontSize={30} />
        </button>
    )
}

export default BurgerMenu;