import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface ThemeTogglerState {
    theme: string,
    toggle: () => void
}

const useThemeTogglerStore = create<ThemeTogglerState>() (
    devtools(
        persist(
            (set) => ({
                theme: "light",
                toggle: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
            }),
            {
                name: "theme-storage"
            }
        )
    )
)

export default useThemeTogglerStore;


