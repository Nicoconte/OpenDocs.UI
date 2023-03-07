import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface MenuTogglerState {
    isOpen: boolean,
    toggleMenu: () => void
}

const useMenuTogglerStore = create<MenuTogglerState>() (
    devtools(
        persist(
            (set) => ({
                isOpen: false,
                toggleMenu: () => set((state) => ({ isOpen: !state.isOpen }))
            }),
            {
                name: "menustate-storage"
            }
        )
    )
)

export default useMenuTogglerStore;